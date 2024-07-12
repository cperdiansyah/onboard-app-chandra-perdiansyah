import { useScheduleStore } from '@/src/store/scheduleStore';
import { useUserStore } from '@/src/store/userStore';
import Layout from '@components/Layout';
import ModalFormSchedule from '@components/Molecules/ModalFormSchedule';
import ScheduleApp from '@components/Organisms/ScheduleApp';

const Home = () => {
  const { removeSchedule, addSchedule } = useScheduleStore();
  const { users, addUser, removeUser } = useUserStore();

  const onRemoveShedule = (id: string) => {
    removeSchedule(id);
  };
  const onAddSchedule = () => {};
  return (
    <Layout>
      <div className="flex justify-between mt-5 container header-form">
        <h4 className="font-semibold text-xl tracking-tight">Schedule</h4>
        <ModalFormSchedule buttonTitle="Add Schedule" users={users} />
      </div>
      <ScheduleApp
        onRemoveSchedule={onRemoveShedule}
        onAddSchedule={onAddSchedule}
      />
    </Layout>
  );
};

export default Home;
