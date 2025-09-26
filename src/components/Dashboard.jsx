import { useState, useEffect } from 'react';
import { fetchProviders } from '../data/mockData';
import FilterBar from './FilterBar';
import ServiceCard from './ServiceCard';
import LoadingSkeleton from './LoadingSkeleton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
  const [providers, setProviders] = useState([]);
  const [filteredProviders, setFilteredProviders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  const [filters, setFilters] = useState(() => {
    const savedFilters = localStorage.getItem('serviceFilters');
    return savedFilters ? JSON.parse(savedFilters) : {
      search: '',
      serviceType: '',
      location: { city: '', state: '', country: '' },
      date: '',
      priceSort: ''
    };
  });

  // Fetch providers on component mount
  useEffect(() => {
    const loadProviders = async () => {
      try {
        setLoading(true);
        const data = await fetchProviders();
        setProviders(data);
        setFilteredProviders(data);
      } catch (error) {
        toast.error('Failed to load providers');
        console.error('Error fetching providers:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProviders();
  }, []);

  // Apply filters whenever filters or providers change
  useEffect(() => {
    let filtered = providers;

    // Search filter
    if (filters.search) {
      filtered = filtered.filter(provider =>
        provider.name.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    // Service type filter
    if (filters.serviceType) {
      filtered = filtered.filter(provider =>
        provider.serviceType === filters.serviceType
      );
    }

    // Location filters
    if (filters.location.city) {
      filtered = filtered.filter(provider =>
        provider.location.city === filters.location.city
      );
    }
    if (filters.location.state) {
      filtered = filtered.filter(provider =>
        provider.location.state === filters.location.state
      );
    }
    if (filters.location.country) {
      filtered = filtered.filter(provider =>
        provider.location.country === filters.location.country
      );
    }

    // Date filter
    if (filters.date) {
      filtered = filtered.filter(provider =>
        provider.availableDates.includes(filters.date)
      );
    }

    // Price sorting
    if (filters.priceSort) {
      filtered = [...filtered].sort((a, b) => {
        return filters.priceSort === 'asc' ? a.price - b.price : b.price - a.price;
      });
    }

    setFilteredProviders(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [filters, providers]);

  // Save filters to localStorage
  useEffect(() => {
    localStorage.setItem('serviceFilters', JSON.stringify(filters));
  }, [filters]);

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProviders.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProviders.length / itemsPerPage);

  const handleBookNow = (provider) => {
    toast.success(`Booking confirmed with ${provider.name}! We'll contact you soon.`);
  };

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Service Providers</h1>
          <LoadingSkeleton />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <ToastContainer position="top-right" autoClose={3000} />
        
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Service Providers</h1>
        <p className="text-gray-600 mb-8">Find and book your perfect service provider</p>

        <FilterBar 
          filters={filters} 
          onFiltersChange={handleFiltersChange}
          providers={providers}
        />

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {currentItems.length} of {filteredProviders.length} providers
            {filteredProviders.length !== providers.length && ' (filtered)'}
          </p>
        </div>

        {/* Service Cards Grid */}
        {currentItems.length > 0 ? (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {currentItems.map(provider => (
                <ServiceCard 
                  key={provider.id} 
                  provider={provider} 
                  onBookNow={handleBookNow}
                /> 
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-2">
                <button
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-3 py-2 rounded-md bg-white border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  Previous
                </button>
                
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => goToPage(index + 1)}
                    className={`px-3 py-2 rounded-md ${
                      currentPage === index + 1
                        ? 'bg-primary-500 text-white'
                        : 'bg-white border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
                
                <button
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-3 py-2 rounded-md bg-white border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  Next
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No providers found</h3>
            <p className="text-gray-600">Try adjusting your filters to see more results.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;