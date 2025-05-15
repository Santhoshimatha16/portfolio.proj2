import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ProfileSelectPage from './pages/ProfileSelectPage';
import MainPage from './pages/MainPage';
import { AuthProvider } from './context/AuthContext';
import { User, Profile } from './types';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [currentProfile, setCurrentProfile] = useState<Profile | null>(null);
  const navigate = useNavigate();

  // Check if user is logged in
  useEffect(() => {
    const user = localStorage.getItem('netflix-user');
    if (user) {
      setIsAuthenticated(true);
      
      // If profile is selected, redirect to main page
      const profile = localStorage.getItem('netflix-profile');
      if (profile) {
        setCurrentProfile(JSON.parse(profile));
        navigate('/browse');
      } else {
        navigate('/profiles');
      }
    }
  }, [navigate]);

  const handleLogin = (user: User) => {
    localStorage.setItem('netflix-user', JSON.stringify(user));
    setIsAuthenticated(true);
    navigate('/profiles');
  };

  const handleProfileSelect = (profile: Profile) => {
    localStorage.setItem('netflix-profile', JSON.stringify(profile));
    setCurrentProfile(profile);
    navigate('/browse');
  };

  const handleLogout = () => {
    localStorage.removeItem('netflix-user');
    localStorage.removeItem('netflix-profile');
    setIsAuthenticated(false);
    setCurrentProfile(null);
    navigate('/login');
  };

  return (
    <AuthProvider 
      value={{ 
        isAuthenticated,
        currentProfile, 
        login: handleLogin,
        selectProfile: handleProfileSelect,
        logout: handleLogout
      }}
    >
      <Routes>
        <Route path="/login" element={
          !isAuthenticated ? <LoginPage /> : <Navigate to="/profiles" />
        } />
        <Route path="/profiles" element={
          isAuthenticated && !currentProfile ? <ProfileSelectPage /> : 
          isAuthenticated ? <Navigate to="/browse" /> : <Navigate to="/login" />
        } />
        <Route path="/browse" element={
          isAuthenticated && currentProfile ? <MainPage /> : <Navigate to="/login" />
        } />
        <Route path="*" element={<Navigate to={isAuthenticated ? "/browse" : "/login"} />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;