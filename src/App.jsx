import { Routes, Route } from 'react-router';
import Header from '@/Components/Header';
import './App.css';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Adoption from '@/pages/Adoption';
import LostFound from '@/pages/LostFound';
import Signup from '@/pages/Signup';
import SuccessfulCases from '@/pages/SuccessfulCases';
import Donation from '@/pages/Donation';
import Footer from '@/Components/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="adoption" element={<Adoption />} />
        <Route path="donation" element={<Donation />} />
        <Route path="login" element={<Login />} />
        <Route path="lost-found" element={<LostFound />} />
        <Route path="signup" element={<Signup />} />
        <Route path="successful-cases" element={<SuccessfulCases />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
