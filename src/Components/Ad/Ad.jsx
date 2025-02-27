import PropTypes from 'prop-types';
import './Ad.css';
/* 
Implementation examples:
Square ad
<Ad ad={{ img: squareAd, alt: 'Fake Square Ad' }} />

Leaderboard ad
<Ad
  leaderboard
  ad={{
    img: leaderboardAd,
    desktopImg: desktopLeaderboardAd,
    alt: 'Fake leaderboard Ad',
  }}
/>
*/
export default function Ad({ leaderboard = false, ad }) {
  if (!leaderboard) {
    return (
      <a href="#" className="ad">
        <img src={ad.img} alt={ad.alt} />
      </a>
    );
  } else {
    return (
      <a href="#" className="ad ad-leaderboard">
        <img src={ad.img} alt={ad.alt} />
        <img src={ad.desktopImg} alt={ad.alt} className="desktop" />
      </a>
    );
  }
}

Ad.propTypes = {
  leaderboard: PropTypes.bool,
  ad: PropTypes.shape({
    img: PropTypes.string.isRequired,
    desktopImg: PropTypes.string,
    alt: PropTypes.string.isRequired,
  }).isRequired,
};
