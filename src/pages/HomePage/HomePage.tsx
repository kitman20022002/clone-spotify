import React, { useEffect } from 'react';
import './HomePage.css';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';
import { getTokenFromUrl, loginUrl } from '../../api/spotify';
import { useDataLayerValue } from '../../DataLayer';
import Player from '../../component/Player/Player';
import Feature from './Feature/Feature';
import faceBook from '../../assets/facebook-icon.png';
import twitter from '../../assets/twitter-icon.png';
import linkedIn from '../../assets/linkedin-icon.png';
import whiteSmLogo from '../../assets/kitify-logo-sm-white.png';

function HomePage() {
  const [{ token, spotify }, dispatch] = useDataLayerValue();
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie] = useCookies(['hash']);
  const history = useHistory();

  useEffect(() => {
    const hash: any = cookies.hash === undefined ? getTokenFromUrl() : cookies.hash;
    const t = hash.access_token;

    window.location.hash = '';
    if (t) {
      dispatch({
        type: 'SET_TOKEN',
        token: t,
      });
      const expirationDate = new Date();
      expirationDate.setTime(expirationDate.getTime() + hash.expires_in * 1000);
      if (!cookies.hash) {
        setCookie('hash', hash, { path: '/', expires: expirationDate });
      }
      spotify.setAccessToken(t);
      spotify.getMe().then((us: any) => {
        dispatch({
          type: 'SET_USER',
          user: us,
        });
      });

      spotify.getUserPlaylists().then((playlists: any) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists,
        });
      });
      spotify.getPlaylist('37i9dQZEVXcMsjEXCfPif1').then((response: any) => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discoverWeekly: response,
        });
      });
      history.push('/player');
    }
  }, []);

  return (
    <div className="body--home">
      <header className="site-header">
        <div className="container-md">
          <img src={whiteSmLogo} alt="logo" className="header-logo" />
        </div>
      </header>
      <main>
        <section className="header__section">
          <div className="flex space-between header__container">
            <div className="header-home container">
              <div className="header__text-container">
                <h1>Looking for Music ?</h1>
                <p>
                  Hate Spotify look, use Kitify which connects to Spotify API and start listening the best music in the
                  world
                </p>
              </div>
              <div className="header__button-container">
                <a href={loginUrl} className="button button--blue">
                  OPEN WEB PLAYER
                </a>
                <a href="https://www.spotify.com/au/premium/" className="button button--dark">
                  GET IN TOUCH
                </a>
              </div>
            </div>
            <div className="header-decoration">
              <div className="hero-figure-box hero-figure-box-01" />
              <div className="hero-figure-box hero-figure-box-02" />
              <div className="hero-figure-box hero-figure-box-03" />
              <div className="hero-figure-box hero-figure-box-04" />
              <div className="hero-figure-box hero-figure-box-05" />
              <div className="hero-figure-box hero-figure-box-06" />
              <div className="hero-figure-box hero-figure-box-07" />
              <div className="hero-figure-box hero-figure-box-08" />
              <div className="hero-figure-box hero-figure-box-09" />
              <div className="hero-figure-box hero-figure-box-10" />
            </div>
          </div>
        </section>
        <section>
          <div className="container feature__container">
            <Feature title="It's Free" />
            <Feature title="Listen to music ad-free" />
            <Feature title="Play anywhere - even offline" />
            <Feature title="On-demand playback" />
            <Feature title="World best music" />
            <Feature title="Nothing to say" />
          </div>
        </section>
        <section>
          <div className="container-sm pricing">
            <h2>Unlimited for all</h2>
            <p>
              What are you considering stop thinking at get it today, who know will I let you pay later on. Hope on the
              plan today
            </p>
            <div className="pricing-table">
              <h3>
                <span className="color--grey">$</span>
                <span>0</span>
                <span className="color--grey size-sm">/month</span>
              </h3>
              <p>What you will get</p>
              <ul>
                <li>Yep! It&apos;s free</li>
                <li>The best music in the world</li>
                <li>No ads</li>
                <li>On-demand playback</li>
              </ul>
              <a className="button button--blue full-width " href="https://www.spotify.com/au/premium/">
                SUBSCRIBE
              </a>
            </div>
          </div>
          <div className="container-md">
            <div className="banner">
              <h3>Still not convinced on subscribing?</h3>
              <a className="button button--blue" href="https://www.spotify.com/au/">
                Get in Touch
              </a>
            </div>
          </div>
        </section>
        <footer className="footer-home">
          <div className="container-md">
            <div className="flex space-between">
              <a href="https://www.kitmanyiu.com">
                <img className="header-logo-image" src={whiteSmLogo} alt="Logo" />
              </a>
              <div className="social-media">
                <img alt="d" src={linkedIn} />
                <img alt="d" src={twitter} />
                <img alt="d" src={faceBook} />
              </div>
            </div>
            <div className="flex space-between">
              <div>
                <p className="color--grey font-sm">© 2021 Kitman Yiu, all rights reserved</p>
              </div>
              <div>
                <ul className="flex color--grey">
                  <li>Contact</li>
                  <li>About</li>
                  <li>Privacy</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </main>
      <div>{token && <Player />}</div>
    </div>
  );
}
// https://preview.cruip.com/solid/
export default HomePage;
