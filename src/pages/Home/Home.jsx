import Hero from '@/Components/Hero';
import DonationSection from '@/Components/DonationSection';
import AdoptionSection from '@/Components/AdoptionSection';

export default function Home() {
  return (
    <main>
      <h1>Lost Tails Home Page</h1>
      <Hero />
      <DonationSection />
      <AdoptionSection />
    </main>
  );
}
