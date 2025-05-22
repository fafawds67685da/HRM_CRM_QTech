import React, { useState } from 'react';
import './Leads.css';
import { FaPlus, FaFilter, FaTable, FaThLarge } from 'react-icons/fa';

import LeadsListView from '/src/components/Leads/LeadsListView/LeadsListView';
import LeadsKanbanView from '/src/components/Leads/LeadsKanbanView/LeadsKanbanView';
import ModalWrapper from '/src/components/ModalWrapper/ModalWrapper';
import AddLeadForm from '/src/components/AddLeadForm/AddLeadForm';

const dummyLeads = [
	{ name: 'John Doe', company: 'Acme Corp', status: 'New', source: 'Email', contact: 'john@example.com' },
	{ name: 'Jane Smith', company: 'Techies Ltd', status: 'Contacted', source: 'LinkedIn', contact: 'jane@techies.com' },
];

const Leads = () => {
	const [view, setView] = useState('list');
	const [showAddForm, setShowAddForm] = useState(false);

	const toggleForm = () => setShowAddForm(!showAddForm);

	return (
		<div className="leads-page">
			<header className="leads-header">
				<h1>Leads</h1>
				<div className="leads-header-actions">
					<button className="lead-action-btn" onClick={toggleForm}>
						<FaPlus /> Add Lead
					</button>
					<button className="lead-action-btn">
						<FaFilter /> Filters
					</button>
					<button
						className={`lead-action-btn ${view === 'list' ? 'active' : ''}`}
						onClick={() => setView('list')}
					>
						<FaTable /> List View
					</button>
					<button
						className={`lead-action-btn ${view === 'kanban' ? 'active' : ''}`}
						onClick={() => setView('kanban')}
					>
						<FaThLarge /> Kanban View
					</button>
				</div>
			</header>

			{showAddForm && (
				<ModalWrapper onClose={toggleForm}>
					<AddLeadForm
						onCancel={toggleForm}
						onSave={(leadData) => {
							console.log('New Lead:', leadData);
							toggleForm();
						}}
					/>
				</ModalWrapper>
			)}

			<section className="leads-body">
				{view === 'list' && <LeadsListView leads={dummyLeads} />}
				{view === 'kanban' && <LeadsKanbanView leads={dummyLeads} />}
			</section>
		</div>
	);
};

export default Leads;
