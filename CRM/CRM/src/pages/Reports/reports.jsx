import React, { useState } from 'react';
import './reports.css';

import SalesOverview from '/src/components/Reports/SalesOverview/SalesOverview';
import LeadAnalytics from '/src/components/Reports/LeadAnalytics/LeadAnalytics';
import ActivityReports from '/src/components/Reports/ActivityReports/ActivityReports';
import TeamPerformance from '/src/components/Reports/TeamPerformance/TeamPerformance';
import RevenueForecast from '/src/components/Reports/RevenueForecast/RevenueForecast';

const Reports = () => {
  const [activeTab, setActiveTab] = useState('salesOverview');

  const renderContent = () => {
    switch (activeTab) {
      case 'salesOverview':
        return <SalesOverview />;
      case 'leadAnalytics':
        return <LeadAnalytics />;
      case 'activityReports':
        return <ActivityReports />;
      case 'teamPerformance':
        return <TeamPerformance />;
      case 'revenueForecast':
        return <RevenueForecast />;
      default:
        return <SalesOverview />;
    }
  };

  return (
    <div className="reports-container">
      <h1>Reports</h1>
      <nav className="reports-tabs">
        <button
          className={activeTab === 'salesOverview' ? 'active' : ''}
          onClick={() => setActiveTab('salesOverview')}
        >
          Sales Overview
        </button>
        <button
          className={activeTab === 'leadAnalytics' ? 'active' : ''}
          onClick={() => setActiveTab('leadAnalytics')}
        >
          Lead Analytics
        </button>
        <button
          className={activeTab === 'activityReports' ? 'active' : ''}
          onClick={() => setActiveTab('activityReports')}
        >
          Activity Reports
        </button>
        <button
          className={activeTab === 'teamPerformance' ? 'active' : ''}
          onClick={() => setActiveTab('teamPerformance')}
        >
          Team Performance
        </button>
        <button
          className={activeTab === 'revenueForecast' ? 'active' : ''}
          onClick={() => setActiveTab('revenueForecast')}
        >
          Revenue Forecast
        </button>
      </nav>

      <section className="reports-content">
        {renderContent()}
      </section>
    </div>
  );
};

export default Reports;
