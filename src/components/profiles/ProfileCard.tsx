import React from 'react';
import { Profile } from '../../types';
import { Lock } from 'lucide-react';

interface ProfileCardProps {
  profile: Profile;
  onSelect: (profile: Profile) => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile, onSelect }) => {
  return (
    <div 
      className="profile-card"
      onClick={() => onSelect(profile)}
    >
      <div 
        className="aspect-square mb-2 relative" 
        style={{ backgroundColor: profile.avatarColor }}
      >
        {profile.isKids && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/10 text-white font-bold text-lg">
            children
          </div>
        )}
        
        {!profile.isKids && (
          <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-4xl">
            {profile.name.length === 1 ? profile.name : ''}
          </div>
        )}
        
        {profile.isPinProtected && (
          <div className="absolute bottom-2 right-2">
            <Lock className="w-4 h-4 text-white opacity-70" />
          </div>
        )}
      </div>
      
      <div className="text-center text-gray-400 group-hover:text-white transition-colors">
        {profile.name.length > 1 ? profile.name : ''}
      </div>
    </div>
  );
};

export default ProfileCard;