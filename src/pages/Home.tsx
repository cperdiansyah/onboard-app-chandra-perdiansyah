import Layout from '@components/Layout';
import { Button } from '@components/ui/button';
import ScheduleApp from '@components/Organisms/ScheduleApp';
import { useScheduleStore } from '@/src/store/scheduleStore';

const Home = () => {
  const { removeSchedule, addSchedule } = useScheduleStore();

  const onRemoveShedule = (id: string) => {
    removeSchedule(id);
  };
  const onAddSchedule = () => {};
  return (
    <Layout>
      <div className="flex justify-between mt-5 container header-form">
        <h4 className="font-semibold text-xl tracking-tight">Schedule</h4>
        <Button variant="outline" className="shadow-sm">
          Add Schedule
        </Button>
      </div>
      <ScheduleApp
        onRemoveSchedule={onRemoveShedule}
        onAddSchedule={onAddSchedule}
      />
    </Layout>
  );
};

export default Home;
