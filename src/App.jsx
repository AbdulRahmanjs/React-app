import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
// import Post from './pages/Post';

const App = () => {
  return (
    <BrowserRouter>
    
    {/* <Router> */}
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/post/:id" element={<Post />} /> */}
        </Routes>
      </main>
    {/* </Router> */}
    </BrowserRouter>
  );
};

export default App;