import { useEffect, useState } from 'react';

import { Button } from '@components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@components/ui/dialog';
import { Input } from '@components/ui/input';
import { Label } from '@components/ui/label';
import { User } from '@src/types/store/userStoreType';
import Combobox, { ICombobox } from '@components/Molecules/Combobox';
import { useUserStore } from '@src/store/userStore';

export interface IModalFormSchedule {
  buttonTitle?: string;
  users: User[];
}

interface IModalForm {
  user?: User;
  start?: string;
  end?: string;
}

const ModalFormSchedule = (props: IModalFormSchedule) => {
  const { buttonTitle = 'Open', users } = props;
  const { getUserById } = useUserStore();

  const [open, setOpen] = useState(false);
  const [comboboxValue, setComboboxValue] = useState<string>();
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
    setComboboxValue(comboboxValue);
  };
  const submitButton = async () => {
    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
              value={comboboxValue}
              title="User"
            />
          </div>
          <div className="items-center gap-4 grid grid-cols-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="items-center gap-4 grid grid-cols-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
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
