// npm install @lottiefiles/dotlottie-react
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './Hero.css';

export default function Hero() {
  return (
    <section>
      <div className="hero-header">
        <article className="hero">
          <h1>Helping Tails Find Their Way Home.</h1>
          <div className="hero-buttons">
            <button className="btn">Lost Pet</button>
            <button className="btn">Found Pet</button>
          </div>
        </article>
        <article>
          <DotLottieReact
            src="https://lottie.host/4821f0e5-2898-424d-977f-1fdf9b096b95/FBIbcKlPTr.lottie"
            loop
            autoplay
            style={{ width: '100%', height: 'auto' }}
          />
        </article>
      </div>
    </section>
  );
}
