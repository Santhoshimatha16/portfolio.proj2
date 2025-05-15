import { useEffect } from 'react';
import Logo from '../components/common/Logo';
import ProfileCard from '../components/profiles/ProfileCard';
import Button from '../components/common/Button';
import { profiles } from '../data/movies';
import { useAuth } from '../context/AuthContext';

const ProfileSelectPage = () => {
  const { selectProfile } = useAuth();
  
  useEffect(() => {
    document.title = 'Netflix - Who\'s watching?';
  }, []);

  return (
    <div className="min-h-screen bg-netflix-dark flex flex-col">
      {/* Header */}
      <header className="px-4 py-6">
        <div className="max-w-screen-2xl mx-auto">
          <Logo size="medium" />
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-8">
        <h1 className="text-3xl md:text-5xl text-white mb-8 text-center">
          Who's watching?
        </h1>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8">
          {profiles.map((profile) => (
            <ProfileCard 
              key={profile.id}
              profile={profile}
              onSelect={selectProfile}
            />
          ))}
        </div>
        
        <Button variant="outline">
          Manage Profiles
        </Button>
      </main>
    </div>
  );
};

export default ProfileSelectPage;