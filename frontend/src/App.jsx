
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PetDashboard from './petDashboard';
import PetLoginPage from './login';
import PetSignupPage from './signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PetLoginPage/>} />
        <Route path="/signup" element={<PetSignupPage/>} />
        <Route path="/dashboard" element={<PetDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
