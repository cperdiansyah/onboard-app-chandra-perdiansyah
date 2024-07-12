import { useEffect, useState } from 'react';

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

export interface IModalFormSchedule {
  buttonTitle?: string;
  users: User[];
}

interface IModalForm {
  user?: User;
  start?: Date | undefined;
  end?: Date | undefined;
}

const ModalFormSchedule = (props: IModalFormSchedule) => {
  const { buttonTitle = 'Open', users } = props;
  const { getUserById } = useUserStore();

  const [openDialog, setOpenDialog] = useState(false);
  const [comboboxItem, setComboboxItem] = useState<ICombobox['items']>();
  const [formValue, setFormValue] = useState<IModalForm>();
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

  const submitButton = async () => {
    setOpenDialog(false);
  };

  console.log(formValue);
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
            </div>
            <div className="date-picker-container">
              <Label htmlFor="name" className="text-right">
                End
              </Label>
              <DatePicker
                date={formValue?.start}
                setDate={(date: Date | undefined) =>
                  handleChangeDatePicker({
                    key: 'end',
                    value: date,
                  })
                }
                className="mt-3"
              />
            </div>
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <Button
            type="button"
            variant="default"
            className="w-full"
            onClick={submitButton}
          >
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ModalFormSchedule;
