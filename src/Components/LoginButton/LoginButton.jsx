import { logout, authObserver } from '@/services/firebase';
import Button from '@/UI/Button';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

export default function LoginButton() {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = authObserver(setUser);

    return () => unsubscribe();
  }, []);

  // Function to handle the button click
  const handleLogin = () => {
    navigate('/login');
  };

  return !user ? (
    <Button onClick={handleLogin}>Log In</Button>
  ) : (
    <Button onClick={logout}>Logout</Button>
  );
}
