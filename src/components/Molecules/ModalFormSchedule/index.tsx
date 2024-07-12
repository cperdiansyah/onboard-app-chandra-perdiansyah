import {
  convertDateMoment,
  createSlug,
  generateTitleSchedule,
} from '@/src/lib/helpers';
import { ScheduleDataType } from '@/src/types/store/scheduleStoreType';
import Combobox, { ICombobox } from '@components/Molecules/Combobox';
import { Button } from '@components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@components/ui/dialog';
import { Label } from '@components/ui/label';
import DatePicker from '@src/components/Molecules/DatePicker';
import { useUserStore } from '@src/store/userStore';
import { User } from '@src/types/store/userStoreType';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export interface IModalFormSchedule {
  buttonTitle?: string;
  users: User[];
  onAddSchedule: (dataSchedule: ScheduleDataType) => void;
}

interface IModalForm {
  user?: User;
  start?: Date | undefined;
  end?: Date | undefined;
}

const ModalFormSchedule = (props: IModalFormSchedule) => {
  const { buttonTitle = 'Open', users, onAddSchedule } = props;
  const { getUserById } = useUserStore();

  const [openDialog, setOpenDialog] = useState(false);
  const [comboboxItem, setComboboxItem] = useState<ICombobox['items']>();
  const [formValue, setFormValue] = useState<IModalForm>();
  const [formError, setFormError] = useState<Record<string, boolean>>({
    user: false,
    start: false,
    end: false,
  });

  useEffect(() => {
    const newItems = users?.map(
      (user) => ({
        label: user.name,
        value: user.id,
      }),
      []
    );
    setComboboxItem(newItems);
  }, [users]);

  const handleComboboxSelect = (comboboxValue: string) => {
    const user = getUserById(comboboxValue);
    setFormValue((state) => ({
      ...state,
      user,
    }));
  };
  const handleChangeDatePicker = (values: {
    key: keyof IModalForm;
    value: Date | undefined;
  }) => {
    const { key, value } = values;
    setFormValue((state) => ({
      ...state,
      [key]: value,
    }));
  };

  const onSubmit = async () => {
    const errors: Record<string, boolean> = {};

    for (const key of ['user', 'start', 'end'] as const) {
      const fieldValue: unknown = formValue?.[key];
      if (
        !fieldValue ||
        (typeof fieldValue === 'string' && fieldValue.trim() === '') ||
        (fieldValue instanceof Date && isNaN(fieldValue.getTime()))
      ) {
        errors[key] = true;
        break;
      } else {
        errors[key] = false;
      }
    }
    setFormError(errors);

    if (!Object.values(errors).includes(true)) {
      const submitedScheduleData: ScheduleDataType = {
        end: convertDateMoment(formValue?.end),
        start: convertDateMoment(formValue?.start),
        title: generateTitleSchedule(formValue?.start, formValue?.end),
        className: createSlug(formValue?.user?.name || ''),
        userId: formValue?.user?.id || '',
        user: formValue?.user?.name || '',
      };
      onAddSchedule(submitedScheduleData);
      toast.success('Schedule has been created');
      setOpenDialog(false);
    }
  };

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger>
        <Button variant="outline" className="shadow-sm">
          {buttonTitle}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Schedule</DialogTitle>
        </DialogHeader>
        <div className="gap-4 grid py-4">
          <div className="items-center gap-4 grid grid-cols-1">
            <Label htmlFor="name" className="text-left">
              User
            </Label>
            <Combobox
              items={comboboxItem}
              onSelect={handleComboboxSelect}
              value={formValue?.user?.id}
              title="User"
            />
            {formError.user && (
              <span className="font-medium text-red-500 text-sm">
                User Required!
              </span>
            )}
          </div>
          <div className="items-center gap-4 grid grid-cols-2">
            <div className="date-picker-container">
              <Label htmlFor="name" className="text-right">
                Start
              </Label>
              <DatePicker
                date={formValue?.start}
                setDate={(date: Date | undefined) =>
                  handleChangeDatePicker({
                    key: 'start',
                    value: date,
                  })
                }
                className="mt-3"
              />
              {formError.start && (
                <span className="font-medium text-red-500 text-sm">
                  Start Date Required!
                </span>
              )}
            </div>
            <div className="date-picker-container">
              <Label htmlFor="name" className="text-right">
                End
              </Label>
              <DatePicker
                date={formValue?.end}
                setDate={(date: Date | undefined) =>
                  handleChangeDatePicker({
                    key: 'end',
                    value: date,
                  })
                }
              />
              {formError.end && (
                <span className="font-medium text-red-500 text-sm">
                  End Date Required!
                </span>
              )}
            </div>
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <Button
            type="button"
            variant="default"
            className="w-full"
            onClick={onSubmit}
          >
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ModalFormSchedule;
