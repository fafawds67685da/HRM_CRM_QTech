import React from 'react';
import './KPIWidgets.css';
import { FaUserFriends, FaDollarSign } from 'react-icons/fa';
import { AiOutlineLineChart, AiOutlineCheckCircle } from 'react-icons/ai';

const widgets = [
  { title: 'Total Leads', value: 325, icon: <FaUserFriends />, change: '+12%' },
  { title: 'Active Deals', value: 142, icon: <AiOutlineLineChart />, change: '+5%' },
  { title: 'Closed Deals', value: 76, icon: <AiOutlineCheckCircle />, change: '-2%' },
  { title: 'Revenue This Month', value: '$24,500', icon: <FaDollarSign />, change: '+18%' },
];

const KPIWidgets = () => {
  return (
    <div className="kpi-container">
      {widgets.map((widget, index) => {
        const changeClass = widget.change?.startsWith('+')
          ? 'kpi-change positive'
          : widget.change?.startsWith('-')
          ? 'kpi-change negative'
          : 'kpi-change neutral';

        return (
          <div className="kpi-card" key={index} style={{backgroundColor: '#ffffff'}}>
            <div className="kpi-icon">{widget.icon}</div>
            <div className="kpi-info">
              <h3 className="kpi-title">{widget.title}</h3>
              <p className="kpi-value">{widget.value}</p>
              {widget.change && <span className={changeClass}>{widget.change}</span>}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default KPIWidgets;