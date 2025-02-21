import { useNavigate } from 'react-router';

export default function LoginButton() {
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle the button click
  const handleLoginClick = () => {
    navigate('/login'); // Navigate to /login page
  };

  return (
    <button className="login-button" onClick={handleLoginClick}>
      Login
    </button>
  );
}
