
export const serviceProviders = [
  {
    id: 1,
    name: "John Plumbing Services",
    profilePicture: "/images/providers/plumber.jpeg",
    serviceType: "Plumber",
    location: {
      city: "Pudukkottai",
      state: "Tamil Nadu"
    },
    availableDates: ["2025-10-15", "2025-10-16", "2025-10-20", "2025-10-25"],
    price: 700
  },
  {
    id: 2,
    name: "Malar's Tutoring",
    profilePicture: "/images/providers/malar.jpeg",
    serviceType: "Tutor",
    location: {
      city: "Kodaikanal",
      state: "Tamil Nadu"
    },
    availableDates: ["2025-10-14", "2025-10-18", "2025-10-22", "2025-10-26"],
    price: 1500
  },
  {
    id: 3,
    name: "Paartha's Electrical Works",
    profilePicture: "/images/providers/paartha.jpeg",
    serviceType: "Electrician",
    location: {
      city: "Coimbatore",
      state: "Tamil Nadu"
    },
    availableDates: ["2025-10-15", "2025-10-17", "2025-10-19", "2025-10-21"],
    price: 800
  },
  {
    id: 4,
    name: "JD's Math Tutoring",
    profilePicture: "/images/providers/jd.jpeg",
    serviceType: "Tutor",
    location: {
      city: "Chennai",
      state: "Tamil Nadu"
    },
    availableDates: ["2025-10-16", "2025-10-18", "2025-10-20", "2025-10-24"],
    price: 1600
  },
  {
    id: 5,
    name: "Keerthi's Yoga Class",
    profilePicture: "/images/providers/keerthi.jpeg",
    serviceType: "Yoga Instructor",
    location: {
      city: "Pudukkottai",
      state: "Tamil Nadu"
    },
    availableDates: ["2025-10-14", "2025-10-15", "2025-10-19", "2025-10-23"],
    price: 2000
  },
  {
    id: 6,
    name: "Nesamani's Painting Service",
    profilePicture: "/images/providers/nesamani.jpeg",
    serviceType: "Painter",
    location: {
      city: "Chennai",
      state: "Tamil Nadu"
    },
    availableDates: ["2025-10-17", "2025-10-18", "2025-10-22", "2025-10-25"],
    price: 1200
  },
  {
    id: 7,
    name: "Sam's Makeup Service",
    profilePicture: "/images/providers/sam.jpeg",
    serviceType: "Beautician",
    location: {
      city: "Bangalore",
      state: "Karnataka"
    },
    availableDates: ["2025-10-16", "2025-10-19", "2025-10-21", "2025-10-26"],
    price: 1100
  },
  {
    id: 8,
    name: "Kalyani's Tutoring",
    profilePicture: "/images/providers/kalyani.jpeg",
    serviceType: "Tutor",
    location: {
      city: "Kochi",
      state: "Kerala"
    },
    availableDates: ["2025-10-15", "2025-10-17", "2025-10-20", "2025-10-24"],
    price: 1750
  },
  {
    id: 9,
    name: "Sarathy Electric Solutions",
    profilePicture: "/images/providers/sarathy.jpeg",
    serviceType: "Electrician",
    location: {
      city: "Bangalore",
      state: "Karnataka"
    },
    availableDates: ["2025-10-14", "2025-10-18", "2025-10-22", "2025-10-25"],
    price: 1400
  },
  {
    id: 10,
    name: "Dhamu's Catering",
    profilePicture: "/images/providers/dhamu.jpeg",
    serviceType: "Chef",
    location: {
      city: "Hyderabad",
      state: "Telangana"
    },
    availableDates: ["2025-10-15", "2025-10-17", "2025-10-20","2025-10-22","2025-10-24"],
    price: 2500
  },
  {
    id: 11,
    name: "Ram Studios",
    profilePicture: "/images/providers/ram.jpeg",
    serviceType: "Photographer",
    location: {
      city: "Kochi",
      state: "Kerala"
    },
    availableDates: ["2025-10-16", "2025-10-17", "2025-10-19", "2025-10-24"],
    price: 1700
  },
  {
    id: 12,
    name: "Siddhu Catering",
    profilePicture: "/images/providers/siddhu.jpeg",
    serviceType: "Chef",
    location: {
      city: "Kochi",
      state: "Kerala"
    },
    availableDates: ["2025-10-20", "2025-10-22", "2025-10-23", "2025-10-24"],
    price: 1750
  },
  {
    id: 13,
    name: "Lisa's Fitness Training",
    profilePicture: "/images/providers/lisa.jpeg",
    serviceType: "Fitness Trainer",
    location: {
      city: "Hyderabad",
      state: "Telangana"
    },
    availableDates: ["2025-10-15", "2025-10-17", "2025-10-20", "2025-10-24"],
    price: 1800
  },
  {
    id: 14,
    name: "Surya's Fitness Training",
    profilePicture: "/images/providers/surya.jpeg",
    serviceType: "Fitness Trainer",
    location: {
      city: "Mumbai",
      state: "Maharastra"
    },
    availableDates: ["2025-10-15", "2025-10-17", "2025-10-20", "2025-10-24"],
    price: 1750
  },
  {
    id: 15,
    name: "Venkat's Photography",
    profilePicture: "/images/providers/venkat.jpeg",
    serviceType: "Photographer",
    location: {
      city: "Mumbai",
      state: "Maharastra"
    },
    availableDates: ["2025-10-15", "2025-10-17", "2025-10-20", "2025-10-24"],
    price: 2700
  }
];

//API call
export const fetchProviders = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(serviceProviders);
    }, 1000);
  });
};