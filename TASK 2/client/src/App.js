import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import MovieCard from './pages/MovieCard.jsx';
import SearchBar from './components/SearchBar.jsx';
import Filters from './components/Filters.jsx';
import MovieDetails from './pages/MovieDetails.jsx';
function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-black">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/search" element={<SearchBar />} />
        <Route path="/filters" element={<Filters />} />
        <Route path="/movie-card" element={<MovieCard />} />
       
      </Routes>
    </div>
  );
}

export default App;
