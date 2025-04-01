import DonationBanner from '@/assets/images/donationBanner.svg';
import styles from './Donation.module.css';
import Container from '@/UI/Container';
import DonationForm from '@/Components/DonationForm';
import DonationCard from '@/Components/DonationCard/DonationCard';

export default function Donation() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.sectionInfo}>
          <h1>Support Our Cause</h1>
          <p>
            Every day, countless pets are lost, abandoned, or in need of a
            loving home.
            <br /> <strong>Your donation</strong> can make a life-changing
            difference for friends.
          </p>
          <DonationBanner className={styles.banner} />
        </div>
        <div className={styles.sectionMainContent}>
          <DonationForm />
          <div className={styles.sectionLastDonations}>
            <h2>Last Donations</h2>
            <DonationCard />
          </div>
        </div>
      </Container>
    </section>
  );
}
