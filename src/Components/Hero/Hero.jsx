import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import heroAnimation from '@/assets/lottie/hero-animation.json';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-header">
      <article className="hero">
        <h1>Helping Tails Find Their Way Home.</h1>
        <div className="hero-buttons">
          <button className="btn">Lost Pet</button>
          <button className="btn">Found Pet</button>
        </div>
      </article>
      <DotLottieReact
        data={heroAnimation}
        loop
        autoplay
        style={{ width: '100%', height: 'fit-content' }}
      />
    </section>
  );
}
