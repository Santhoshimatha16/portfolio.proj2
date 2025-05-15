import { useEffect, useState } from 'react';
import NavBar from '../components/common/NavBar';
import MovieBanner from '../components/main/MovieBanner';
import MovieRow from '../components/main/MovieRow';
import { movies, categories } from '../data/movies';

const MainPage = () => {
  const [featuredMovie, setFeaturedMovie] = useState(movies[0]);
  
  useEffect(() => {
    document.title = 'Home - Netflix';
    
    // Optionally choose a random featured movie
    const randomIndex = Math.floor(Math.random() * 3); // Limit to first few movies
    setFeaturedMovie(movies[randomIndex]);
  }, []);

  return (
    <div className="min-h-screen bg-netflix-black">
      {/* Navigation */}
      <NavBar transparent />
      
      {/* Featured Content Banner */}
      <MovieBanner movie={featuredMovie} />
      
      {/* Movie Rows */}
      <div className="relative z-20 pb-10">
        {categories.map((category) => (
          <MovieRow 
            key={category.id}
            title={category.name}
            movies={category.movies}
          />
        ))}
      </div>
    </div>
  );
};

export default MainPage;