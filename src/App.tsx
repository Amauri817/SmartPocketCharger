import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home'
import Shop from './pages/shop'
import Story from './pages/story'

const App: React.FC = () => {

  return (
    <>
      <Router>
        <Routes>
          {/* The route for the home page */}
          <Route path="/" element={<Home />} />
          {/* Other routes */}
          <Route path="/shop" element={<Shop />} />
          <Route path="/story" element={<Story />} />
        </Routes>
      </Router>
    </>
  )
}

export default App