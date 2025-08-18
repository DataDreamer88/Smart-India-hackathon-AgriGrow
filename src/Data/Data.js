// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";



// Sidebar Data
export const SidebarData = [
  {
     icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Commodities",
  },
  {
    icon: UilPackage,
    heading: 'News',
  },
  {
    icon: UilChart,
    heading: 'Analytics',
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Wheat",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 78, // Representing a slight rise in price due to supply issues
    value: "₹2900/quintal",  // Updated realistic value for wheat per quintal
    change: "+2% this week",  // Wheat price has risen by 2% this week
    png: UilUsdSquare,
    series: [
      {
        name: "Wheat",
        data: [3000, 3100, 2900, 3200, 3400, 3200, 3300], // Weekly data with small changes in ₹/quintal
      },
    ],
  },
  {
    title: "Rice",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 84, // Stable demand but slight fluctuations
    value: "₹3200/quintal",  // Updated realistic value for rice per quintal
    change: "-1% this week",  // Rice price has dropped by 1%
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Rice",
        data: [4000, 3900, 3800, 3700, 3800, 3900, 3800], // Weekly data with slight variation in ₹/quintal
      },
    ],
  },
  {
    title: "Corn",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 69, // Corn has seen a moderate rise due to seasonal demand
    value: "₹2200/quintal",  // Updated realistic value for corn per quintal
    change: "+3% this week",  // Corn price has increased by 3%
    png: UilClipboardAlt,
    series: [
      {
        name: "Corn",
        data: [2400, 2500, 2400, 2600, 2600, 2700, 2600], // Weekly data with moderate increase in ₹/quintal
      },
    ],
  },
];


// Recent Update Card Data
export const UpdatesData = [
  {
    "name": "Yield Boost",
    "noti": "New study reveals that the latest crop varieties can increase yield by 20%.",
    "time": "1 day ago"
  },
  {
    "name": "Subsidies Announced",
    "noti": "Government announces new subsidies to support sustainable farming practices.",
    "time": "2 days ago"
  },
  {
    "name": "Monsoon Outlook",
    "noti": "Experts forecast a favorable monsoon season, which is expected to boost crop growth.",
    "time": "1 day ago"
  }
 
];
