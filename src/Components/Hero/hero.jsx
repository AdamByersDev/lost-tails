// npm install @lottiefiles/dotlottie-react
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './hero.css';

export default function HeroComponent() {
  return (
    <div>
      {/* HEADER START */}
      <header>
        <main className="hero">
          <h1>Helping Tails Find Their Way Home.</h1>
          <div className="hero-buttons">
            <button className="btn">Lost Pet</button>
            <button className="btn">Found Pet</button>
          </div>
        </main>
        <section>
          <DotLottieReact
            src="https://lottie.host/4821f0e5-2898-424d-977f-1fdf9b096b95/FBIbcKlPTr.lottie"
            loop
            autoplay
            style={{ width: '100%', height: 'auto' }}
          />
        </section>
      </header>
      {/* HEADER END */}
    </div>
  );
}
