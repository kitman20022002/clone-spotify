import React, { useEffect } from 'react';
import './Footer.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
// import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import { Grid, Slider } from '@material-ui/core';
import { PauseCircleOutline } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { useDataLayerValue } from '../../DataLayer';
import SpotifyWebPlayBackAPI from '../../utils/spotifyPlayer';
import { truncate } from '../../utils/helper';

interface IFooterProps {
  spotify: any,
}

function Footer(props: IFooterProps) {
  const { spotify } = props;
  const history = useHistory();
  const [{
    item, playing, token, deviceId, volume, mute, previousVolume,
  }, dispatch] = useDataLayerValue();

  const toggleMusic = (contextUri ?: string, deviceID?: string) => {
    const d = deviceId === null ? deviceID : deviceId;
    if (playing) {
      spotify.pause();
      dispatch({
        type: 'SET_PLAYING',
        playing: false,
      });
    } else {
      let options = {
        device_id: d,
      };

      if (contextUri) {
        const obj2 = {
          context_uri: contextUri,
          offset: {
            position: 0,
          },
        };
        options = { ...options, ...obj2 };
      }
      spotify.play(options);
    }
  };

  // @ts-ignore
  const stateChange = (state) => {
    console.log(state);
    dispatch({
      type: 'SET_ITEM',
      item: state.track_window.current_track,
    });
    dispatch({
      type: 'SET_PLAYING',
      playing: !state.paused,
    });
    dispatch({
      type: 'SET_QUEUE_TRACKS',
      queueTracks: state.track_window.next_tracks,
    });
  };

  // @ts-ignore
  // eslint-disable-next-line camelcase
  const playerLoaded = ({ device_id }) => {
    dispatch({
      type: 'SET_DEVICEID',
      deviceId: device_id,
    });
    spotify.getMyDevices().then((r: any) => {
      const d = r.devices.find((device: any) =>
        // eslint-disable-next-line camelcase,implicit-arrow-linebreak
        device.id === device_id);
      dispatch({
        type: 'SET_ACTIVE_DEVICE',
        activeDevice: d,
      });
      dispatch({
        type: 'SET_VOLUME',
        volume: d.volume_percent,
      });
    });

    toggleMusic('spotify:playlist:37i9dQZEVXcMsjEXCfPif1', device_id);
  };
  const onChangeVolume = (event: any, value: any) => {
    spotify.setVolume(value);
    dispatch({
      type: 'SET_VOLUME',
      volume: value,
    }, (data: any) => {
      console.log(data);
    });
  };

  const toggleMute = () => {
    dispatch({
      type: 'SET_MUTE',
      mute: !mute,
    });
    spotify.setVolume(!mute ? 0 : previousVolume);
  };

  const skipPrevious = () => {
    spotify.skipToPrevious();
  };

  const skipNext = () => {
    spotify.skipToNext();
  };

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const splay = new SpotifyWebPlayBackAPI(token, playerLoaded, stateChange);
  }, [spotify]);

  return !deviceId
    ? (
      <div className="footer">
        <p>Loading...</p>
      </div>
    )
    : (
      <div className="footer">
        <div className="footer__left">
          <img
            className="footer__albumLogo"
            src={item?.album.images[0].url}
            alt={item?.name}
          />
          <div className="footer__songInfo">
            <h4>{item && truncate(item?.name, 30, '...')}</h4>
            <p>{item?.artists.map((artist: any) => artist.name).join(', ')}</p>
          </div>
        </div>
        <div className="footer__center">
          <ShuffleIcon className="footer__green" />
          <SkipPreviousIcon className="footer__icon" onClick={() => skipPrevious()} />
          {!playing
            ? (
              <PlayCircleOutlineIcon
                fontSize="large"
                className="footer__icon"
                onClick={() => toggleMusic()}
              />
            )
            : (
              <PauseCircleOutline
                fontSize="large"
                className="footer__icon"
                onClick={() => toggleMusic()}
              />
            )}
          <SkipNextIcon className="footer__icon" onClick={() => skipNext()} />
          <RepeatIcon className="footer__green" />
        </div>
        <div className="footer__right">
          <Grid container spacing={2}>
            <Grid item>
              <PlaylistPlayIcon onClick={() => history.push('/queue')} />
            </Grid>
            <Grid item>
              {volume !== 0
                ? <VolumeDownIcon onClick={toggleMute} />
                : <VolumeOffIcon onClick={toggleMute} />}
            </Grid>
            <Grid item xs>
              <Slider
                aria-labelledby="continuous-slider"
                value={volume}
                onChange={onChangeVolume}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    );
}

export default Footer;
