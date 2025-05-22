import React from 'react';
import './Dashboard.css';

import KPIWidgets from '/src/components/Dashboard/KPIWidgets/KPIWidgets';
import SalesPipeline from '/src/components/Dashboard/SalesPipeline/SalesPipeline';
import UpcomingTasks from '/src/components/Dashboard/UpcomingTasks/UpcomingTasks';
import RecentActivities from '/src/components/Dashboard/RecentActivities/RecentActivities';
import QuickActions from '/src/components/Dashboard/QuickActions/QuickActions';
import TrendSnapshot from '/src/components/Dashboard/TrendSnapshot/TrendSnapshot';
import NotificationsPanel from '/src/components/Dashboard/NotificationsPanel/NotificationsPanel';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>

      <section className="dashboard-section kpi-widgets">
        <KPIWidgets />
      </section>

      <section className="dashboard-section pipeline-and-tasks">
        <SalesPipeline />
        <UpcomingTasks />
      </section>

      <section className="dashboard-section recent-and-quick">
        <TrendSnapshot />
        <RecentActivities />
        <NotificationsPanel />
        <QuickActions />
      </section>
    </div>
  );
};

export default Dashboard;