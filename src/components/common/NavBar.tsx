import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Search, Bell, ChevronDown } from 'lucide-react';
import Logo from './Logo';
import { useAuth } from '../../context/AuthContext';

interface NavBarProps {
  transparent?: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ transparent = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { currentProfile, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bgClass = transparent && !isScrolled 
    ? 'bg-gradient-to-b from-black/80 to-transparent'
    : 'bg-netflix-black';

  return (
    <nav className={`fixed top-0 w-full z-50 transition-colors duration-300 ${bgClass}`}>
      <div className="max-w-screen-2xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/browse">
            <Logo />
          </Link>
          
          <div className="hidden md:flex space-x-4">
            <Link to="/browse" className="text-sm text-white hover:text-gray-300">Home</Link>
            <Link to="/browse" className="text-sm text-gray-300 hover:text-white">TV Shows</Link>
            <Link to="/browse" className="text-sm text-gray-300 hover:text-white">Movies</Link>
            <Link to="/browse" className="text-sm text-gray-300 hover:text-white">Games</Link>
            <Link to="/browse" className="text-sm text-gray-300 hover:text-white">New & Popular</Link>
            <Link to="/browse" className="text-sm text-gray-300 hover:text-white">My List</Link>
            <Link to="/browse" className="text-sm text-gray-300 hover:text-white">Browse by Languages</Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-white">
            <Search className="w-5 h-5" />
          </button>
          
          <button className="text-white">
            <Bell className="w-5 h-5" />
          </button>
          
          <div className="relative">
            <button 
              className="flex items-center gap-2"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <div 
                className="w-8 h-8 rounded" 
                style={{ backgroundColor: currentProfile?.avatarColor || '#E50914' }}
              ></div>
              <ChevronDown className="w-4 h-4 text-white" />
            </button>
            
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-netflix-black border border-gray-700 rounded shadow-lg py-2">
                {currentProfile && (
                  <div className="px-4 py-2 text-sm text-gray-300">
                    Signed in as <span className="font-bold text-white">{currentProfile.name}</span>
                  </div>
                )}
                <div className="border-t border-gray-700 my-1"></div>
                <button 
                  className="w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-800"
                  onClick={() => navigate('/profiles')}
                >
                  Switch Profiles
                </button>
                <button 
                  className="w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-800"
                  onClick={logout}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;