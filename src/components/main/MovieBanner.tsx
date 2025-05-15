import { useState, useEffect } from 'react';
import { Play, Info } from 'lucide-react';
import Button from '../common/Button';
import { Movie } from '../../types';

interface MovieBannerProps {
  movie: Movie;
}

const MovieBanner: React.FC<MovieBannerProps> = ({ movie }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate image loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [movie]);
  
  return (
    <div className="relative w-full h-[56vw] md:h-[42vw] lg:h-[36vw] xl:h-[85vh] -mt-16">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-netflix-black via-transparent to-transparent z-10"></div>
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
        style={{ 
          backgroundImage: `url(${movie.bannerUrl || movie.imageUrl})`,
          opacity: isLoading ? 0 : 1
        }}
      ></div>
      
      {/* Loading skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-netflix-gray animate-pulse"></div>
      )}
      
      {/* Content */}
      <div className="absolute bottom-[10%] left-0 w-full px-4 md:px-10 lg:px-16 z-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
            {movie.title}
          </h1>
          
          <div className="flex items-center gap-2 text-sm text-gray-300 mb-4">
            <span>{movie.releaseYear}</span>
            <span className="px-1 border border-gray-600">{movie.maturityRating}</span>
            <span>{movie.duration}</span>
          </div>
          
          <p className="text-sm md:text-base text-gray-200 mb-6 line-clamp-3 md:line-clamp-none max-w-3xl">
            {movie.description}
          </p>
          
          <div className="flex gap-3">
            <Button variant="primary" size="large">
              <Play className="w-5 h-5 mr-2" />
              Play
            </Button>
            
            <Button variant="secondary" size="large">
              <Info className="w-5 h-5 mr-2" />
              More Info
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieBanner;