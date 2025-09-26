const ServiceCard = ({ provider, onBookNow }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-primary-500 p-6">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={provider.profilePicture}
          alt={provider.name}
          className="w-16 h-16 rounded-full object-cover border-2 border-primary-200"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{provider.name}</h3>
          <p className="text-primary-600 font-medium">{provider.serviceType}</p>
        </div>
      </div>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center text-gray-600">
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span>{provider.location.city}, {provider.location.state}</span>
        </div>
        
        <div className="flex items-center text-gray-600">
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
          <span>Available: {provider.availableDates.join(" , ")} </span>
        </div>
        
        <div className="flex items-center text-gray-600">
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
            <path fillRule="evenodd" d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" clipRule="evenodd" />

          </svg>
          <span className="font-semibold">{provider.price}/hour</span>
        </div>
        
      </div>
      
     <button
  onClick={() => onBookNow(provider)}
  className="w-full bg-purple-500 hover:bg-primary-600 active:bg-primary-700 active:scale-95 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 cursor-pointer"
>
  Book Now
</button>

    </div>
  );
};

export default ServiceCard;