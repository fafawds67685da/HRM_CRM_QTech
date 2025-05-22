import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/header';

import Dashboard from './pages/Dashboard/dashboard';
import Leads from './pages/Leads/leads';
import Contacts from './pages/Contacts/contacts';
import Companies from './pages/Companies/companies';
import Deals from './pages/Deals/deals';
import Activities from './pages/Activities/activities';
import Reports from './pages/Reports/reports';
import Calendar from './pages/Calendar/calendar';
import Settings from './pages/Settings/settings';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
