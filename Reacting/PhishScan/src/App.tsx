import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/Landing-Page';
import PhishingInfoPage from './components/Info-page';
import ExecutePage from './components/execute-page';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/info" element={<PhishingInfoPage />} />\
         <Route path="/execute" element={<ExecutePage />} />
      </Routes>
    </Router>
  );
}

export default App;