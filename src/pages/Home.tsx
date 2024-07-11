import React from 'react';
import Layout from '@components/Layout';
import { Button } from '@components/ui/button';

const Home = () => {
  return (
    <Layout>
      <div className="flex justify-between mt-5 container header-form">
        {/* <span className="font-medium text-pri text-xl">Schedule</span> */}
        <h4 className="font-semibold text-xl tracking-tight">Schedule</h4>
        <Button variant="outline" className="shadow-sm">
          Add Schedule
        </Button>
      </div>
    </Layout>
  );
};

export default Home;
