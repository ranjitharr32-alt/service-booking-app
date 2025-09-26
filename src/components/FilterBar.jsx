// src/components/FilterBar.jsx
import { useState, useEffect } from 'react';

const FilterBar = ({ filters, onFiltersChange, providers }) => {
  const [localFilters, setLocalFilters] = useState(filters);

  // Get unique values for dropdowns
  const serviceTypes = [...new Set(providers.map(p => p.serviceType))];
  const cities = [...new Set(providers.map(p => p.location.city))];
  const states = [...new Set(providers.map(p => p.location.state))];
  const countries = [...new Set(providers.map(p => p.location.country))];
  const allDates = [...new Set(providers.flatMap(p => p.availableDates))].sort();

  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  const handleFilterChange = (key, value) => {
    const newFilters = { ...localFilters, [key]: value };
    setLocalFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const clearFilters = () => {
    const clearedFilters = {
      search: '',
      serviceType: '',
      location: { city: '', state: '', country: '' },
      date: '',
      priceSort: ''
    };
    setLocalFilters(clearedFilters);
    onFiltersChange(clearedFilters);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Search */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Search by Name</label>
          <input
            type="text"
            value={localFilters.search}
            onChange={(e) => handleFilterChange('search', e.target.value)}
            placeholder="Search providers..."
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        {/* Service Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Service Type</label>
          <select
            value={localFilters.serviceType}
            onChange={(e) => handleFilterChange('serviceType', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="">All Services</option>
            {serviceTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* Location - City */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
          <select
            value={localFilters.location.city}
            onChange={(e) => handleFilterChange('location', { ...localFilters.location, city: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="">All Cities</option>
            {cities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>

        {/* Date Availability */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Available Date</label>
          <select
            value={localFilters.date}
            onChange={(e) => handleFilterChange('date', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="">Any Date</option>
            {allDates.map(date => (
              <option key={date} value={date}>{new Date(date).toLocaleDateString()}</option>
            ))}
          </select>
        </div>

        {/* Price Sort */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Sort by Price</label>
          <select
            value={localFilters.priceSort}
            onChange={(e) => handleFilterChange('priceSort', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="">Default</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Clear Filters Button */}
      <div className="mt-4 flex justify-end">
        <button
          onClick={clearFilters}
          className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
        >
          Clear All Filters
        </button>
      </div>
    </div>
  );
};

export default FilterBar;