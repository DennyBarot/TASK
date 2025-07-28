import React, { useMemo, useState } from 'react';

function Filters({ genres = [], selectedGenre, onGenreChange, selectedYear, onYearChange, sortOption, onSortChange }) {
  const currentYear = new Date().getFullYear();
  const [showFilters, setShowFilters] = useState(false);

  const years = useMemo(() => {
    const result = [];
    for (let y = currentYear; y >= 1900; y--) result.push(y);
    return result;
  }, []);

  return (
    <div>
      {/* Toggle button visible only on small screens */}
      <button
        className="md:hidden mb-2 p-2 bg-blue-600 text-white rounded"
        onClick={() => setShowFilters(!showFilters)}
        aria-expanded={showFilters}
        aria-controls="filters-dropdown"
      >
        {showFilters ? 'Hide Filters' : 'Show Filters'}
      </button>

      {/* Filters container */}
      <div
        id="filters-dropdown"
        className={`flex flex-wrap gap-4 ${showFilters ? 'block' : 'hidden'} md:flex md:block`}
      >
        <select
          value={selectedGenre}
          onChange={onGenreChange}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Genres</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>{genre.name}</option>
          ))}
        </select>

        <select
          value={selectedYear}
          onChange={onYearChange}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Years</option>
          {years.map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>

        <select
          value={sortOption}
          onChange={onSortChange}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="popularity.desc">Sort by Popularity</option>
          <option value="release_date.desc">Sort by Release Date</option>
          <option value="vote_average.desc">Sort by Rating</option>
        </select>
      </div>
    </div>
  );
}

export default Filters;
