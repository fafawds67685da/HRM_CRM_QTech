import React, { useState } from 'react';
import './deals.css';

import DealListView from '/src/components/Deals/DealListView/DealListView';
import DealKanbanView from '/src/components/Deals/DealKanbanView/DealKanbanView';
import AddDealModal from '/src/components/Deals/AddDealModal/AddDealModal';
import DealsFilterBar from '/src/components/Deals/DealsFilterBar/DealsFilterBar';

const initialDeals = [
	{
		id: 1,
		name: 'Website Redesign',
		amount: 15000,
		stage: 'Negotiation',
		closeDate: '2025-06-15',
		company: 'Tech Solutions',
		contact: 'John Doe',
	},
	{
		id: 2,
		name: 'Mobile App Development',
		amount: 30000,
		stage: 'Proposal',
		closeDate: '2025-07-01',
		company: 'Innovatech',
		contact: 'Jane Smith',
	},
];
const stages = ['Prospecting', 'Qualification', 'Proposal', 'Negotiation', 'Closed Won', 'Closed Lost'];
const Deals = () => {
	const [deals, setDeals] = useState(initialDeals);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [viewMode, setViewMode] = useState('list');
	const [filters, setFilters] = useState({ stage: '', contact: '' });

	const filteredDeals = deals.filter((deal) => {
		const stageMatch = filters.stage ? deal.stage === filters.stage : true;
		const contactMatch = filters.contact ? deal.contact === filters.contact : true;
		return stageMatch && contactMatch;
	});

	const handleAddDeal = (newDeal) => {
		setDeals([...deals, { ...newDeal, id: deals.length + 1 }]);
		setIsModalOpen(false);
	};

	return (
		<div className="deals-container">
			<div className="deals-header">
				<h2>Deals</h2>
				<div className="view-toggle">
					<button className="add-deal-btn" onClick={() => setIsModalOpen(true)}>
						+ Add Deal
					</button>
					<button
						className={viewMode === 'list' ? 'active' : ''}
						onClick={() => setViewMode('list')}
					>
						List View
					</button>
					<button
						className={viewMode === 'kanban' ? 'active' : ''}
						onClick={() => setViewMode('kanban')}
					>
						Kanban View
					</button>
				</div>
			</div>

			<DealsFilterBar filters={filters} setFilters={setFilters} availableStages={stages} />
			<div className="deals-content">
				{viewMode === 'list' ? (
					<DealListView deals={filteredDeals} />
				) : (
					<DealKanbanView deals={filteredDeals} />
				)}
			</div>

			{isModalOpen && (
				<AddDealModal onClose={() => setIsModalOpen(false)} onAddDeal={handleAddDeal} />
			)}
		</div>
	);
};

export default Deals;