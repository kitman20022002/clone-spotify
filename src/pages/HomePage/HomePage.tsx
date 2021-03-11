import React, { useEffect } from 'react';
import './HomePage.css';
import SpotifyWebApi from 'spotify-web-api-js';
import Login from '../../component/Login/Login';
import { getTokenFromUrl } from '../../api/spotify';
import { useDataLayerValue } from '../../DataLayer';
import Player from '../../component/Player/Player';

const spotify = new SpotifyWebApi();

function HomePage() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash: any = getTokenFromUrl();
    window.location.hash = '';
    const t = hash.access_token;
    if (t) {
      dispatch({
        type: 'SET_TOKEN',
        token: t,
      });

      spotify.setAccessToken(t);

      spotify.getMe().then((us) => {
        dispatch({
          type: 'SET_USER',
          user: us,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists,
        });
      });
    }
    console.log(token);
  }, []);
  console.log(user);
  return (
    <div>
      {
        token ? (
          <Player spotify={spotify} />
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default HomePage;
