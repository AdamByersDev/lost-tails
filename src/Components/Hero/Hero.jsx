import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import heroAnimation from '@/assets/lottie/hero-animation.json';
import styles from './Hero.module.css';
import Container from '@/UI/Container';
import Button from '@/UI/Button';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <Container className={styles.container}>
        <DotLottieReact
          data={heroAnimation}
          loop
          autoplay
          className={styles.heroImage}
        />
        <article className={styles.textContent}>
          <h1>Helping Tails Find Their Way Home.</h1>
          <div className={styles.heroButtons}>
            <Button>Lost Pet</Button>
            <Button>Found Pet</Button>
          </div>
        </article>
      </Container>
    </section>
  );
}
