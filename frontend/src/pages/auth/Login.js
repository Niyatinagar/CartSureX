// Login page for authentication
// Future: Add validation, error handling, etc.

import React, { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import Button from '../../components/ui/Button';

const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    // ...login logic...
    login({ name: 'User' });
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 border rounded">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
};

export default Login;
