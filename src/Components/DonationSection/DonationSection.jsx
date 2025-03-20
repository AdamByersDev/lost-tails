import './DonationSection.css';
import { Link } from 'react-router';
import catRescue from '@/assets/images/cat-rescue.jpg';

const DonationSection = () => {
  return (
    <section className="donations-section">
      <img src={catRescue} alt="Rescue pet" className="donation-image" />
      <div className="donation-text">
        <h2 className="donation-section-header">Support Our Cause</h2>
        <p>
          By donating to our cause, you&apos;re supporting local animal rescues
          and shelters, helping animals in need, and giving back to the
          community. A small portion also helps keep our platform running, so we
          can continue making a difference together!
        </p>
        <Link to={'donation'}>
          <button className="donate-btn">Donate Now</button>
        </Link>
      </div>
    </section>
  );
};

export default DonationSection;
