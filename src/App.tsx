import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ChannelPage } from './pages/ChannelPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/channel/:name" element={<ChannelPage />} />
      </Routes>
    </Router>
  );
}

export default App;