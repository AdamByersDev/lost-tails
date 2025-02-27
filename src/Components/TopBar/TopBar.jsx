import './TopBar.css';

export default function TopBarComponent() {
  return (
    <div>
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
    </div>
  );
}
