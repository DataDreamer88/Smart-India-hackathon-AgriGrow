import './App.css';
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RightSide/RightSide';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Table from './components/Table/Table'; // Import Table component
import CustomerReview from './components/CustomerReview/CustomerReview';
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="AppGlass">
        <Sidebar />
          <div className="MainContent">
            <Routes>
              {/* Set LandingPage as the default route */}
              <Route path="/" element={<LandingPage />} />
              {/* Add routes for other components */}
              <Route path="/dashboard" element={<MainDash />} />
              <Route path="/commodities" element={<Table />} />
              <Route path="/news" element={<RightSide />} />
              <Route path="/analytics" element={<CustomerReview />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
