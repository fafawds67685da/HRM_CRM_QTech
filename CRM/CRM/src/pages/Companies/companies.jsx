import React, { useState } from 'react';
import './companies.css';

import CompanyListView from '/src/components/Companies/CompanyListView/CompanyListView';
import AddCompanyModal from '/src/components/Companies/AddCompanyModal/AddCompanyModal';
import FilterBar from '/src/components/Companies/FilterBar/FilterBar';

const initialDummyCompanies = [
	{
		name: 'Acme Corp',
		industry: 'Manufacturing',
		location: 'New York, USA',
		contactsCount: 12,
	},
	{
		name: 'Global Solutions',
		industry: 'IT Services',
		location: 'London, UK',
		contactsCount: 8,
	},
	{
		name: 'Tech Innovators',
		industry: 'Software Development',
		location: 'San Francisco, USA',
		contactsCount: 15,
	},
];

const Companies = () => {
	const [companies, setCompanies] = useState(initialDummyCompanies);
	const [filteredCompanies, setFilteredCompanies] = useState(initialDummyCompanies);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleAddCompany = (newCompany) => {
		const updatedCompanies = [...companies, newCompany];
		setCompanies(updatedCompanies);
		setFilteredCompanies(updatedCompanies);
		setIsModalOpen(false);
	};

	const handleFilter = (filters) => {
		let filtered = companies;

		if (filters.name) {
			filtered = filtered.filter((c) =>
				c.name.toLowerCase().includes(filters.name.toLowerCase())
			);
		}
		if (filters.industry) {
			filtered = filtered.filter((c) => c.industry === filters.industry);
		}
		if (filters.location) {
			filtered = filtered.filter((c) => c.location === filters.location);
		}

		setFilteredCompanies(filtered);
	};

	return (
		<div className="companies-container">
			<div className="companies-header">
				<h2>Companies</h2>
				<button className="add-company-btn" onClick={() => setIsModalOpen(true)}>
					+ Add Company
				</button>
			</div>

			<FilterBar companies={companies} onFilter={handleFilter} />
			<CompanyListView companies={filteredCompanies} />

			{isModalOpen && (
				<AddCompanyModal onClose={() => setIsModalOpen(false)} onAddCompany={handleAddCompany} />
			)}
		</div>
	);
};

export default Companies;
