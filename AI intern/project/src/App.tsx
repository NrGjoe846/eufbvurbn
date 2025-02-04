import React from 'react';
import { useState } from 'react';
import { Eye, EyeOff, Facebook, Calendar, Plus, LogOut, User, Mail, Lock } from 'lucide-react';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';

export type User = {
  id: string;
  name: string;
  email: string;
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentView, setCurrentView] = useState<'login' | 'signup' | 'dashboard'>('login');
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const handleLogin = (email: string, password: string) => {
    // Simulate login - replace with actual authentication
    setCurrentUser({
      id: '1',
      name: 'John Doe',
      email: email
    });
    setIsLoggedIn(true);
    setCurrentView('dashboard');
  };

  const handleSignup = (name: string, email: string, password: string) => {
    // Simulate signup - replace with actual registration
    setCurrentUser({
      id: '1',
      name: name,
      email: email
    });
    setIsLoggedIn(true);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsLoggedIn(false);
    setCurrentView('login');
  };

  return (
    <div className="min-h-screen w-full bg-purple-900 relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=2560")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Geometric overlay */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
          </pattern>
          <rect width="100" height="100" fill="url(#grid)"/>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        {currentView === 'login' && (
          <Login 
            onLogin={handleLogin}
            onSwitchToSignup={() => setCurrentView('signup')}
          />
        )}
        
        {currentView === 'signup' && (
          <Signup
            onSignup={handleSignup}
            onSwitchToLogin={() => setCurrentView('login')}
          />
        )}
        
        {currentView === 'dashboard' && currentUser && (
          <Dashboard
            user={currentUser}
            onLogout={handleLogout}
          />
        )}
      </div>
    </div>
  );
}

export default App;