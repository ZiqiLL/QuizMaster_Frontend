import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
      <Router>
        <Routes>
          {/* Route for the Landing Page */}
          <Route path="/" element={<LandingPage />} />

            {/* Route for Signup Page */}
            <Route path="/signup" element={<SignupPage />} />

            {/* Route for Login Page */}
            <Route path="/login" element={<LoginPage />} />

            {/* Route for Home Page */}
            <Route path="/home" element={<HomePage />} />
        </Routes>
      </Router>
  );
}

export default App;
