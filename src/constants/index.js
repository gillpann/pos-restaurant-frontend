import butterChicken from "../assets/images/butter-chicken-4.jpg";
import palakPaneer from "../assets/images/Saag-Paneer-1.jpg";
import biryani from "../assets/images/hyderabadibiryani.jpg";
import masalaDosa from "../assets/images/masala-dosa.jpg";
import choleBhature from "../assets/images/chole-bhature.jpg";
import rajmaChawal from "../assets/images/rajma-chawal-1.jpg";
import gulabJamun from "../assets/images/gulab-jamun.webp";
import pooriSabji from "../assets/images/poori-sabji.webp";
import roganJosh from "../assets/images/rogan-josh.jpg";

export const popularDishes = [
  {
    id: 1,
    image: butterChicken,
    name: "Butter Chicken",
    numberOfOrders: 250,
  },
  {
    id: 2,
    image: palakPaneer,
    name: "Palak Paneer",
    numberOfOrders: 180,
  },
  {
    id: 3,
    image: biryani,
    name: "Biryani",
    numberOfOrders: 320,
  },
  {
    id: 4,
    image: masalaDosa,
    name: "Masala Dosa",
    numberOfOrders: 210,
  },
  {
    id: 5,
    image: choleBhature,
    name: "Chole Bhature",
    numberOfOrders: 195,
  },
  {
    id: 6,
    image: rajmaChawal,
    name: "Rajma Chawal",
    numberOfOrders: 160,
  },
  {
    id: 7,
    image: gulabJamun,
    name: "Gulab Jamun",
    numberOfOrders: 140,
  },
  {
    id: 8,
    image: pooriSabji,
    name: "Poori Sabji",
    numberOfOrders: 170,
  },
  {
    id: 9,
    image: roganJosh,
    name: "Rogan Josh",
    numberOfOrders: 155,
  },
];

export const tables = [
    { id: 1, name: "Table 1", status: "Booked", initial: "AM", seats: 4 },
    { id: 2, name: "Table 2", status: "Available", initial: "MB", seats: 6 },
    { id: 3, name: "Table 3", status: "Booked", initial: "JS", seats: 2 },
    { id: 4, name: "Table 4", status: "Available", initial: "HR", seats: 4 },
    { id: 5, name: "Table 5", status: "Booked", initial: "PL", seats: 3 },
    { id: 6, name: "Table 6", status: "Available", initial: "RT", seats: 4 },
    { id: 7, name: "Table 7", status: "Booked", initial: "LC", seats: 5 },
    { id: 8, name: "Table 8", status: "Available", initial: "DP", seats: 5 },
    { id: 9, name: "Table 9", status: "Booked", initial: "NK", seats: 6 },
    { id: 10, name: "Table 10", status: "Available", initial: "SB", seats: 6 },
    { id: 11, name: "Table 11", status: "Booked", initial: "GT", seats: 4 },
    { id: 12, name: "Table 12", status: "Available", initial: "JS", seats: 6 },
    { id: 13, name: "Table 13", status: "Booked", initial: "EK", seats: 2 },
    { id: 14, name: "Table 14", status: "Available", initial: "QN", seats: 6 },
    { id: 15, name: "Table 15", status: "Booked", initial: "TW", seats: 3 },
    { id: 16, name: "Table 16", status: "Available", initial: "ND", seats: 2 },
    { id: 17, name: "Table 17", status: "Available", initial: "GN", seats: 3 },
  ];

export const startersItem = [
  {
    id: 1,
    name: "Spring Rolls",
    price: 5.5,
    category: "Vegetarian"
  },
  {
    id: 2,
    name: "Chicken Gyoza",
    price: 6.5,
    category: "Non-Vegetarian"
  },
  {
    id: 3,
    name: "Crispy Chicken Wings",
    price: 7.5,
    category: "Non-Vegetarian"
  },
  {
    id: 4,
    name: "French Fries",
    price: 4.5,
    category: "Vegetarian"
  },
  {
    id: 5,
    name: "Shrimp Tempura",
    price: 8.0,
    category: "Non-Vegetarian"
  },
  {
    id: 6,
    name: "Garlic Bread",
    price: 4.0,
    category: "Vegetarian"
  }
];

export const mainCourse = [
  {
    id: 1,
    name: "Chicken Teriyaki",
    price: 12.5,
    category: "Non-Vegetarian"
  },
  {
    id: 2,
    name: "Beef Black Pepper",
    price: 14.0,
    category: "Non-Vegetarian"
  },
  {
    id: 3,
    name: "Fried Rice Special",
    price: 10.0,
    category: "Non-Vegetarian"
  },
  {
    id: 4,
    name: "Pad Thai",
    price: 11.5,
    category: "Non-Vegetarian"
  },
  {
    id: 5,
    name: "Grilled Chicken Steak",
    price: 15.0,
    category: "Non-Vegetarian"
  },
  {
    id: 6,
    name: "Vegetable Stir Fry",
    price: 9.5,
    category: "Vegetarian"
  }
];

export const beverages = [
  {
    id: 1,
    name: "Iced Lemon Tea",
    price: 3.5,
    category: "Cold"
  },
  {
    id: 2,
    name: "Thai Iced Tea",
    price: 4.0,
    category: "Cold"
  },
  {
    id: 3,
    name: "Fresh Orange Juice",
    price: 4.5,
    category: "Cold"
  },
  {
    id: 4,
    name: "Americano Coffee",
    price: 3.0,
    category: "Hot"
  },
  {
    id: 5,
    name: "Cappuccino",
    price: 4.0,
    category: "Hot"
  },
  {
    id: 6,
    name: "Mineral Water",
    price: 2.0,
    category: "Cold"
  }
];

export const soups = [
  {
    id: 1,
    name: "Chicken Corn Soup",
    price: 5.5,
    category: "Non-Vegetarian"
  },
  {
    id: 2,
    name: "Miso Soup",
    price: 4.5,
    category: "Vegetarian"
  },
  {
    id: 3,
    name: "Cream of Mushroom Soup",
    price: 5.0,
    category: "Vegetarian"
  },
  {
    id: 4,
    name: "Tom Yum Soup",
    price: 6.5,
    category: "Non-Vegetarian"
  },
  {
    id: 5,
    name: "Vegetable Soup",
    price: 4.0,
    category: "Vegetarian"
  }
];

export const desserts = [
  {
    id: 1,
    name: "Chocolate Lava Cake",
    price: 6.5,
    category: "Vegetarian"
  },
  {
    id: 2,
    name: "Cheesecake",
    price: 6.0,
    category: "Vegetarian"
  },
  {
    id: 3,
    name: "Ice Cream Sundae",
    price: 5.0,
    category: "Vegetarian"
  },
  {
    id: 4,
    name: "Fruit Platter",
    price: 4.5,
    category: "Vegetarian"
  }
];

export const pizzas = [
  {
    id: 1,
    name: "Margherita Pizza",
    price: 10.0,
    category: "Vegetarian"
  },
  {
    id: 2,
    name: "Pepperoni Pizza",
    price: 12.0,
    category: "Non-Vegetarian"
  },
  {
    id: 3,
    name: "BBQ Chicken Pizza",
    price: 13.5,
    category: "Non-Vegetarian"
  },
  {
    id: 4,
    name: "Veggie Supreme Pizza",
    price: 11.5,
    category: "Vegetarian"
  }
];

export const alcoholicDrinks = [
  {
    id: 1,
    name: "Beer",
    price: 5.0,
    category: "Alcoholic"
  },
  {
    id: 2,
    name: "Red Wine",
    price: 7.5,
    category: "Alcoholic"
  },
  {
    id: 3,
    name: "Whiskey",
    price: 8.0,
    category: "Alcoholic"
  },
  {
    id: 4,
    name: "Cocktail",
    price: 9.0,
    category: "Alcoholic"
  }
];

export const salads = [
  {
    id: 1,
    name: "Caesar Salad",
    price: 7.0,
    category: "Vegetarian"
  },
  {
    id: 2,
    name: "Greek Salad",
    price: 7.5,
    category: "Vegetarian"
  },
  {
    id: 3,
    name: "Chicken Salad",
    price: 8.5,
    category: "Non-Vegetarian"
  },
  {
    id: 4,
    name: "Tuna Salad",
    price: 9.0,
    category: "Non-Vegetarian"
  }
];

export const menus = [
  { id: 1, name: "Starters", bgColor: "#3A2A2A" ,icon: "🍲", items: startersItem },
  { id: 2, name: "Main Course", bgColor: "#2E2F4A" ,icon: "🍛", items: mainCourse },
  { id: 3, name: "Beverages", bgColor: "#2A3A3A" ,icon: "🍹", items: beverages },
  { id: 4, name: "Soups", bgColor: "#4A4028" ,icon: "🍜", items: soups },
  { id: 5, name: "Desserts", bgColor: "#2B2A3A" ,icon: "🍰", items: desserts },
  { id: 6, name: "Pizzas", bgColor: "#2E3A2A" ,icon: "🍕", items: pizzas },
  { id: 7, name: "Alcoholic Drinks", bgColor: "#3A2A30" ,icon: "🍺", items: alcoholicDrinks },
  { id: 8, name: "Salads", bgColor: "#2A4A3A" ,icon: "🥗", items: salads }
]

export const metricsData = [
  { title: "Today's Revenue", value: "$4,287.50", percentage: "18%", color: "#2E2F4A", isIncrease: true }, 
  { title: "Total Orders", value: "127", percentage: "12%", color: "#2A3A3A", isIncrease: true }, 
  { title: "Active Customers", value: "342", percentage: "8%", color: "#4A4028", isIncrease: true }, 
  { title: "Avg Order Value", value: "$33.75", percentage: "5%", color: "#3A2A2A", isIncrease: false }, 
];

export const itemsData = [
  { title: "Total Categories", value: "8", color: "#2B2A3A" }, 
  { title: "Total Dishes", value: "50", percentage: "4%", color: "#2E3A2A", isIncrease: true }, 
  { title: "Active Orders", value: "12", color: "#3A2A30" }, 
  { title: "Total Tables", value: "10", color: "#2A4A3A"} 
];

export const orders = [
  {
    id: "101",
    customer: "Ahmad Gilvan",
    status: "Ready",
    dateTime: "January 18, 2025 08:32 PM",
    items: 8,
    tableNo: 3,
    total: 250.0,
  },
  {
    id: "102",
    customer: "John Doe",
    status: "In Progress",
    dateTime: "January 18, 2025 08:45 PM",
    items: 5,
    tableNo: 4,
    total: 180.0,
  },
  {
    id: "103",
    customer: "Emma Smith",
    status: "Ready",
    dateTime: "January 18, 2025 09:00 PM",
    items: 3,
    tableNo: 5,
    total: 120.0,
  },
  {
    id: "104",
    customer: "Chris Brown",
    status: "In Progress",
    dateTime: "January 18, 2025 09:15 PM",
    items: 6,
    tableNo: 6,
    total: 220.0,
  },
];