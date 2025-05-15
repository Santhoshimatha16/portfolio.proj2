import { createContext, useContext, ReactNode } from 'react';
import { User, Profile } from '../types';

interface AuthContextType {
  isAuthenticated: boolean;
  currentProfile: Profile | null;
  login: (user: User) => void;
  selectProfile: (profile: Profile) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ 
  children, 
  value 
}: { 
  children: ReactNode; 
  value: AuthContextType;
}) => {
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};