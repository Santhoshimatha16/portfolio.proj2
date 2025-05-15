import { useState } from 'react';
import { Movie } from '../../types';

interface MovieCardProps {
  movie: Movie;
  index: number;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const animationDelay = `${index * 50}ms`;
  
  return (
    <div 
      className="movie-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay }}
    >
      {/* Top 10 badge */}
      {movie.isTopRated && (
        <div className="absolute top-0 left-0 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-br z-20">
          TOP 10
        </div>
      )}
      
      {/* Movie thumbnail */}
      <div className="relative aspect-video w-full overflow-hidden">
        <img 
          src={movie.imageUrl} 
          alt={movie.title} 
          className="w-full h-full object-cover"
        />
        
        {/* Hover info overlay */}
        {isHovered && (
          <div className="absolute inset-0 bg-black/60 p-3 flex flex-col justify-end text-white opacity-0 animate-fadeIn">
            <h3 className="font-bold text-sm">{movie.title}</h3>
            <div className="flex items-center gap-2 text-xs mt-1">
              <span>{movie.releaseYear}</span>
              <span className="px-1 border border-gray-600 text-[10px]">{movie.maturityRating}</span>
            </div>
            <div className="text-xs mt-1 line-clamp-2 text-gray-300">
              {movie.genre.join(' • ')}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;