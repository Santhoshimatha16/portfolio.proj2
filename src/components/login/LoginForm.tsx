import { useState } from 'react';
import Button from '../common/Button';
import { User } from '../../types';

interface LoginFormProps {
  onLogin: (user: User) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    
    if (!email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    
    if (password.length < 4) {
      setError('Password must be at least 4 characters long.');
      return;
    }
    
    // Mock login - in a real app, you'd validate with a server
    onLogin({
      id: '1',
      email
    });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md p-8 bg-black/80 rounded-md">
      <h1 className="text-3xl font-bold mb-6">Sign In</h1>
      
      {error && (
        <div className="p-3 mb-4 bg-netflix-red/10 border border-netflix-red rounded text-sm">
          {error}
        </div>
      )}
      
      <div className="space-y-4">
        <div>
          <label className="sr-only" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Email or phone number"
            className="netflix-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div>
          <label className="sr-only" htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            className="netflix-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        <Button type="submit" variant="primary" fullWidth size="large">
          Sign In
        </Button>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember"
              type="checkbox"
              className="w-4 h-4 accent-netflix-gray"
            />
            <label htmlFor="remember" className="ml-2 text-sm text-gray-400">
              Remember me
            </label>
          </div>
          
          <a href="#" className="text-sm text-gray-400 hover:underline">
            Need help?
          </a>
        </div>
      </div>
      
      <div className="mt-12">
        <p className="text-gray-500">
          New to Netflix?{' '}
          <a href="#" className="text-white hover:underline">
            Sign up now
          </a>
        </p>
        
        <p className="mt-4 text-xs text-gray-500">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{' '}
          <a href="#" className="text-blue-600 hover:underline">
            Learn more.
          </a>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;