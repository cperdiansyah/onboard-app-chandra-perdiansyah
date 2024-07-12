import { Button } from '@components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@components/ui/dialog';
import ListWeeksCalendar from '@src/components/Molecules/ListWeeksCalendar';
import { useScheduleStore } from '@src/store/scheduleStore';

interface IModalUserList {
  buttonTitle: string;
  buttonSlug: string;
  userId: string;
}

const ModalUserList: React.FC<IModalUserList> = (props) => {
  const { buttonSlug, buttonTitle, userId } = props;
  const { getSchedulesByIdUser } = useScheduleStore();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className={buttonSlug}>
          {buttonTitle}
        </Button>
      </DialogTrigger>
      <DialogContent className="min-w-[50%] sm:max-w-[425px]">
        <ListWeeksCalendar events={getSchedulesByIdUser(userId)} />
      </DialogContent>
    </Dialog>
  );
};
export default ModalUserList;
