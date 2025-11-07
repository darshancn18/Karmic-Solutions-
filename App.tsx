
import React, { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { CanteenProvider } from './context/CanteenContext';
import SplashScreen from './components/SplashScreen';
import Login from './components/Login';
import EmployeeDashboard from './components/EmployeeDashboard';
import AdminDashboard from './components/AdminDashboard';
import { Role } from './types';

const AppContent: React.FC = () => {
  const { user } = useAuth();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  if (!user) {
    return <Login />;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {user.role === Role.EMPLOYEE && <EmployeeDashboard />}
      {user.role === Role.ADMIN && <AdminDashboard />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <CanteenProvider>
        <AppContent />
      </CanteenProvider>
    </AuthProvider>
  );
};

export default App;
