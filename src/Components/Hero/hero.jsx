export default function HeroComponent() {
  return (
    <div>
      {/* TOPBAR */}
      <section className="topbar">
        <section>
          <article>
            <small>
              <i className="fa-solid fa-phone"></i>
              <a href="tel:+0123456789">+012 345 6789</a>
            </small>
            <small>|</small>
            <small>
              <i className="fa-solid fa-envelope"></i>
              <a href="mailto:info@example.com">info@company.com</a>
            </small>
          </article>
          <ul>
            <li>
              <a href="#" className="fa-brands fa-facebook-f"></a>
            </li>
            <li>
              <a href="#" className="fa-brands fa-tiktok"></a>
            </li>
            <li>
              <a href="#" className="fa-brands fa-instagram"></a>
            </li>
            <li>
              <a href="#" className="fa-brands fa-youtube"></a>
            </li>
          </ul>
        </section>
      </section>
      {/* TOPBAR END */}

      {/* NAVBAR START */}
      <nav className="navbar">
        <div className="logo-container">
          <a href="#" className="logo">
            <img src="/src/assets/images/logo.svg" alt="Lost Tail Logo" />
          </a>
        </div>
        <div className="nav-links">
          <a href="#">About Us</a>
          <a href="#" className="adoption">
            ADOPTION PET
          </a>
          <a href="#">Donation</a>
          <a href="#">Sponsors</a>
          <a href="#">LOG IN</a>
        </div>
        <details>
          <summary className="fa-solid fa-bars"></summary>
          <section>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">ADOPTION PET</a>
              </li>
              <li>
                <a href="#">Donation</a>
              </li>
              <li>
                <a href="#">Sponsors</a>
              </li>
              <li>
                <a href="#">LOG IN</a>
              </li>
            </ul>
          </section>
        </details>
      </nav>
      {/* NAVBAR END */}

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
          <script
            src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs"
            type="module"
          ></script>
          <dotlottie-player
            className="animation"
            src="https://lottie.host/4821f0e5-2898-424d-977f-1fdf9b096b95/FBIbcKlPTr.lottie"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </section>
      </header>
      {/* HEADER END */}
    </div>
  );
}
