import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MovieCard from './MovieCard';
import { Movie } from '../../types';

interface MovieRowProps {
  title: string;
  movies: Movie[];
}

const MovieRow: React.FC<MovieRowProps> = ({ title, movies }) => {
  const rowRef = useRef<HTMLDivElement>(null);
  
  const scroll = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth * 0.75
        : scrollLeft + clientWidth * 0.75;
      
      rowRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold ml-4 md:ml-16 mb-2">{title}</h2>
      
      <div className="group relative">
        {/* Left navigation button */}
        <button 
          className="absolute left-0 top-0 bottom-0 z-40 bg-black/30 text-white w-12 h-full opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => scroll('left')}
        >
          <ChevronLeft className="w-8 h-8 mx-auto" />
        </button>
        
        {/* Movie cards container */}
        <div 
          ref={rowRef}
          className="flex overflow-x-scroll scrollbar-hide pl-4 md:pl-16 py-4 space-x-4"
        >
          {movies.map((movie, index) => (
            <div 
              key={movie.id} 
              className="flex-none w-[180px] md:w-[220px]"
            >
              <MovieCard movie={movie} index={index} />
            </div>
          ))}
        </div>
        
        {/* Right navigation button */}
        <button 
          className="absolute right-0 top-0 bottom-0 z-40 bg-black/30 text-white w-12 h-full opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => scroll('right')}
        >
          <ChevronRight className="w-8 h-8 mx-auto" />
        </button>
      </div>
    </div>
  );
};

export default MovieRow;