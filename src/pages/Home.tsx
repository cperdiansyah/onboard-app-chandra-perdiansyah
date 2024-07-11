import Layout from '@components/Layout';
import { Button } from '@components/ui/button';
import ScheduleApp from '@components/Organisms/ScheduleApp';

const Home = () => {
  return (
    <Layout>
      <div className="flex justify-between mt-5 container header-form">
        <h4 className="font-semibold text-xl tracking-tight">Schedule</h4>
        <Button variant="outline" className="shadow-sm">
          Add Schedule
        </Button>
      </div>
      <ScheduleApp />
    </Layout>
  );
};

export default Home;
