import DonationBanner from '@/assets/images/donationBanner.svg';
import styles from './Donation.module.css';
import Container from '@/UI/Container';
import DonationForm from '@/Components/DonationForm';
import DonationCard from '@/Components/LastDonations/DonationCard';

export default function Donation() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <h1>Support Our Cause</h1>
        <p>
          Every day, countless pets are lost, abandoned, or in need of a loving
          home. Your donation can make a life-changing difference for these
          friends.
        </p>
        <DonationBanner className={styles.banner} />
        <DonationForm />
        <h2>Last Donations</h2>
        <DonationCard />
      </Container>
    </section>
  );
}
