import { useEffect } from 'react';
import Logo from '../components/common/Logo';
import LoginForm from '../components/login/LoginForm';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  useEffect(() => {
    document.title = 'Netflix - Sign In';
  }, []);

  const { login } = useAuth();

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
          filter: 'brightness(0.4)'
        }}
      ></div>
      
      {/* Header */}
      <header className="relative z-10 px-4 py-6">
        <div className="max-w-screen-2xl mx-auto">
          <Logo size="large" />
        </div>
      </header>
      
      {/* Main Content */}
      <main className="relative z-10 flex-grow flex items-center justify-center px-4 py-8">
        <LoginForm onLogin={login} />
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 bg-black/80 text-gray-500 px-4 py-8">
        <div className="max-w-screen-lg mx-auto">
          <p className="mb-6">Questions? Call 1-844-505-2993</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <a href="#" className="hover:underline">FAQ</a>
            <a href="#" className="hover:underline">Help Center</a>
            <a href="#" className="hover:underline">Terms of Use</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Cookie Preferences</a>
            <a href="#" className="hover:underline">Corporate Information</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;