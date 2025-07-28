import React, { useState, useEffect, useMemo, useRef } from 'react';
import MovieCard from './MovieCard.jsx';
import { fetchPopular, fetchGenres, fetchSearch } from '../services/api';
import SearchBar from '../components/SearchBar.jsx';
import Filters from '../components/Filters.jsx';
import Skeleton from '../components/Skeleton.jsx';

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [sortOption, setSortOption] = useState('popularity.desc');

  const searchTimeout = useRef(null);

  useEffect(() => {
    const getPopularMovies = async () => {
      try {
        const data = await fetchPopular();
        setMovies(data.results || []);
      } catch (error) {
        console.error('Failed to fetch popular movies:', error);
      }
    };

    const getGenres = async () => {
      try {
        const data = await fetchGenres();
        setGenres(data.genres || []);
      } catch (error) {
        console.error('Failed to fetch genres:', error);
      }
    };

    const fetchData = async () => {
      setLoading(true);
      await Promise.all([getPopularMovies(), getGenres()]);
      setLoading(false);
    };

    fetchData();
  }, []);


  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current);
    }

    searchTimeout.current = setTimeout(async () => {
      if (query.trim() === '') {
        setLoading(true);
        try {
          const data = await fetchPopular();
          setMovies(data.results || []);
        } catch (error) {
          console.error('Failed to fetch popular movies:', error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(true);
        try {
          const data = await fetchSearch(query);
          setMovies(data.results || []);
        } catch (error) {
          console.error('Failed to fetch search results:', error);
        } finally {
          setLoading(false);
        }
      }
    }, 500); 
  };

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  
  const filteredMovies = useMemo(() => {
    let filtered = movies;

    if (selectedGenre) {
      filtered = filtered.filter(movie =>
        movie.genre_ids && movie.genre_ids.includes(Number(selectedGenre))
      );
    }

    if (selectedYear) {
      filtered = filtered.filter(movie =>
        movie.release_date && movie.release_date.startsWith(selectedYear)
      );
    }

    if (sortOption) {
      const [key, order] = sortOption.split('.');
      filtered = filtered.slice().sort((a, b) => {
        if (order === 'desc') {
          return b[key] > a[key] ? 1 : -1;
        } else {
          return a[key] > b[key] ? 1 : -1;
        }
      });
    }

    return filtered;
  }, [movies, selectedGenre, selectedYear, sortOption]);

  return (
    <>
      <div className="mb-4 flex flex-row items-center justify-between space-x-4 border border-red-900 p-2">
        <div className="flex-grow max-w-md flex items-center">
          <SearchBar searchQuery={searchQuery} onSearchChange={handleSearchChange} />
        </div>
        <div className="flex-grow max-w-2xl flex items-center">
          <Filters
            genres={genres}
            selectedGenre={selectedGenre}
            onGenreChange={handleGenreChange}
            selectedYear={selectedYear}
            onYearChange={handleYearChange}
            sortOption={sortOption}
            onSortChange={handleSortChange}
          />
        </div>
      </div>
      <div className="min-h-[400px]">
        {loading ? (
          <Skeleton />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {filteredMovies.map(movie => (
              <MovieCard key={movie.id} {...movie} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default HomePage;
