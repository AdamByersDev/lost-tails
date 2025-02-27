import Navigation from '@/Components/Navigation/Navigation';
import LoginButton from '@/Components/LoginButton/LoginButton';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <LoginButton />
      </div>
      <div className="nav-container">
        <div className="logo-and-nav">
          <div className="logo">
            <img src="/src/assets/images/logo.svg" alt="Logo" />
          </div>
          <Navigation />
        </div>
      </div>
    </header>
  );
}
