import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GetStarted from './components/GetStarted'; // Ensure this path is correct
// import About from './components/About'; // Example additional page
// import Services from './components/Services'; // Example additional page
// import Contact from './components/Contact'; // Example additional page
// import Login from './components/Login'; // Example additional page

function App() {
  return (
    <Router>
      <Routes>
        {/* Set the GetStarted page as the default route */}
        <Route path="/" element={<GetStarted />} />
        {/* Add routes for other pages */}
        {/* <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
