import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ChannelPage } from './pages/ChannelPage';
import { SubmitChannelPage } from './pages/SubmitChannelPage';
import { AudioPage } from './pages/AudioPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/channel/:name" element={<ChannelPage />} />
        <Route path="/submit" element={<SubmitChannelPage />} />
        <Route path="/audio" element={<AudioPage />} />
      </Routes>
    </Router>
  );
}

export default App;
