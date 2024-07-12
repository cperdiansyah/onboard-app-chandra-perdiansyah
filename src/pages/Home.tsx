import { useScheduleStore } from '@/src/store/scheduleStore';
import { useUserStore } from '@/src/store/userStore';
import Layout from '@components/Layout';
import ModalFormSchedule from '@components/Molecules/ModalFormSchedule';
import ScheduleApp from '@components/Organisms/ScheduleApp';

const Home = () => {
  const { removeSchedule, addSchedule } = useScheduleStore();
  const { users } = useUserStore();

  const onRemoveShedule = (id: string) => {
    removeSchedule(id);
  };
  return (
    <Layout>
      <div className="flex justify-between mt-5 container header-form">
        <h4 className="font-semibold text-xl tracking-tight">Schedule</h4>
        <ModalFormSchedule
          buttonTitle="Add Schedule"
          onAddSchedule={addSchedule}
          users={users}
        />
      </div>
      <ScheduleApp onRemoveSchedule={onRemoveShedule} />
    </Layout>
  );
};

export default Home;
