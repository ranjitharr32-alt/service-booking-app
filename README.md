# Service Booking Dashboard

A modern, responsive React application for browsing and booking service providers with real-time filtering and booking capabilities.

### 🚀 Quick Start for Developers

```bash
# Clone and setup
git clone https://github.com/your-username/service-booking-dashboard.git
cd service-booking-dashboard
npm install
npm run dev
```

## 🚀 Features

- **📱 Responsive Design** - 3 cards per row on desktop, 1 on mobile
- **🔍 Advanced Filtering** - Search by name, service type, location, and date availability
- **💰 Price Sorting** - Sort by price (low to high / high to low)
- **📅 Date Availability** - View available dates for each provider
- **🎯 Real-time Updates** - Filters update results instantly
- **💾 Persistent State** - Filter preferences saved in localStorage
- **⚡ Fast Loading** - Loading skeletons for better UX
- **🔔 Notifications** - Toast notifications for bookings
- **📄 Pagination** - Navigate through large lists easily

## 🛠️ Tech Stack

- **Frontend:** React 18, Vite
- **Styling:** Tailwind CSS
- **Icons:** SVG Icons
- **Notifications:** React Toastify
- **Build Tool:** Vite

## 📦 Installation

1. **Clone the repository**
```bash
git clone https://github.com/ranjitharr32-alt/service-booking-dashboard.git
cd service-booking-dashboard
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Dashboard.jsx          # Main dashboard component
│   ├── FilterBar.jsx          # Filter controls
│   ├── ServiceCard.jsx        # Individual service provider card
│   └── LoadingSkeleton.jsx    # Loading state component
├── data/
│   └── mockData.js           # Mock data and API simulation
├── App.jsx                   # Root component
└── main.jsx                  # Application entry point
```

## 🎯 Core Components

### ServiceCard
Displays individual service provider information:
- Profile picture and name
- Service type and location
- Available dates with badges
- Price and rating
- Book Now button

### FilterBar
Advanced filtering options:
- 🔍 Search by provider name
- 🛠️ Filter by service type (Plumber, Tutor, Electrician, etc.)
- 📍 Filter by location (city, state, country)
- 📅 Filter by date availability
- 💰 Sort by price (ascending/descending)

### Dashboard
Main container that:
- Fetches and manages provider data
- Handles filtering logic
- Implements pagination
- Manages booking notifications

## 📱 Responsive Breakpoints

- **Mobile:** 1 card per row (< 768px)
- **Desktop:** 3 cards per row (> 1024px)

## 🎨 Features in Detail

### Real-time Filtering
- Search filters providers by name as you type
- Location filters highlight matching cities/states
- Date filters show only available providers
- Price sorting updates instantly

### Booking System
- Click "Book Now" to simulate booking
- Toast notification confirms booking
- Provider details included in confirmation

### Data Persistence
- Filter preferences saved in localStorage
- Persists across browser refreshes
- Maintains user preferences

### Performance Optimizations
- Loading skeletons during data fetch
- Pagination for large datasets
- Efficient re-rendering with proper state management

## 🔧 Customization

### Adding New Service Types
Edit `src/data/mockData.js` to add new service providers:

```javascript
{
  id: 10,
  name: "Your Service Name",
  profilePicture: "/images/providers/mynewimage.jpg",
  serviceType: "New Service",
  location: {
    city: "City Name",
    state: "State Code",
    country: "Country"
  },
  availableDates: ["2025-10-27", "2024-10-28"],
  price: 100
}
```
## 📄 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 👨‍💻 Author

Ranjitha R  
https://github.com/ranjitharr32-alt

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Vite for the fast build tool

---





```

The application will be running at `http://localhost:5173`
