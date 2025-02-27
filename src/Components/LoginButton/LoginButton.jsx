import { useNavigate } from 'react-router';

export default function LoginButton() {
  const navigate = useNavigate();

  // Function to handle the button click
  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <button className="login-button" onClick={handleLoginClick}>
      Login
    </button>
  );
}
