import React, { useEffect } from 'react';
import './HomePage.css';
import Login from '../../component/Login/Login';
import { getTokenFromUrl } from '../../api/spotify';
import { useDataLayerValue } from '../../DataLayer';
import Player from '../../component/Player/Player';

interface IHomePageProps {
  spotify: any,
}

function HomePage(props:IHomePageProps) {
  const [{ token }, dispatch] = useDataLayerValue();
  const { spotify } = props;
  useEffect(() => {
    // eslint-disable-next-line camelcase
    // splay.player.addListener('ready', (device_id: any) => {
    //   // eslint-disable-next-line camelcase
    //   console.log(`done${device_id}`);
    // });
    // player.connect();

    const hash: any = getTokenFromUrl();
    window.location.hash = '';
    const t = hash.access_token;
    if (t) {
      dispatch({
        type: 'SET_TOKEN',
        token: t,
      });

      spotify.setAccessToken(t);
      spotify.getMe().then((us:any) => {
        dispatch({
          type: 'SET_USER',
          user: us,
        });
      });

      spotify.getUserPlaylists().then((playlists:any) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists,
        });
      });
      spotify.getPlaylist('37i9dQZEVXcMsjEXCfPif1').then((response:any) => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discoverWeekly: response,
        });
      });
    }
  }, []);

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
