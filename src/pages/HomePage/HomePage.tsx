import React, { useEffect, useState } from 'react';
import './HomePage.css';
import SpotifyWebApi from 'spotify-web-api-js';
import Login from '../../component/Login/Login';
import { getTokenFromUrl } from '../../api/spotify';
import { useDataLayerValue } from '../../DataLayer';

const spotify = new SpotifyWebApi();

function HomePage() {
  const [token, setToken] = useState(null);
  const [{ user }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash: any = getTokenFromUrl();
    window.location.hash = '';
    const t = hash.access_token;
    if (t) {
      dispatch({
        type: 'SET_TOKEN',
        token: t,
      });
      setToken(t);
      spotify.setAccessToken(t);

      spotify.getMe().then((us) => {
        dispatch({
          type: 'SET_USER',
          user: us,
        });
      });
      console.log(user);
    }
  }, []);

  return (
    <div>
      {
        token ? (
          <Login />
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default HomePage;
