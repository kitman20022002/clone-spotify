import React, { useEffect } from 'react';
import './Footer.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import RepeatOneIcon from '@material-ui/icons/RepeatOne';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
// import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import { Grid, Slider } from '@material-ui/core';
import { PauseCircleOutline } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { useDataLayerValue } from '../../DataLayer';
import SpotifyWebPlayBackAPI from '../../utils/spotifyPlayer';
import { REPEAT_MODE, truncate } from '../../utils/helper';
import ImageLoad from '../ImageLoad/ImageLoad';

interface IFooterProps {
  spotify: any,
}

function Footer(props: IFooterProps) {
  const { spotify } = props;
  const history = useHistory();
  const [{
    item, playing, token, deviceId, volume, mute, previousVolume, shuffle, repeatModeIndex, isLiked,
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
  const stateChange = async (state) => {
    console.log(state);
    const res = await spotify.containsMySavedTracks([state.track_window.current_track.id]);
    dispatch({
      type: 'SET_ITEM',
      item: state.track_window.current_track,
      isLiked: res[0],
    });
    dispatch({
      type: 'SET_PLAYING',
      playing: !state.paused,
    });
    dispatch({
      type: 'SET_QUEUE_TRACKS',
      queueTracks: state.track_window.next_tracks,
    });
    dispatch({
      type: 'SET_CONTEXT',
      context: state.context,
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
        volume: d.volume_percent && 100,
      });
    });

    toggleMusic('spotify:playlist:37i9dQZEVXcMsjEXCfPif1', device_id);
  };
  const onChangeVolume = (event: any, value: any) => {
    dispatch({
      type: 'SET_VOLUME',
      volume: value,
    });
    spotify.setVolume(value);
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

  const toggleShuffle = () => {
    dispatch({
      type: 'SET_SHUFFLE',
      shuffle: !shuffle,
    });
    spotify.setShuffle(!shuffle);
  };

  const toggleRepeatMode = () => {
    const rMode = repeatModeIndex + 1 > REPEAT_MODE.length - 1 ? 0 : repeatModeIndex + 1;
    dispatch({
      type: 'SET_REPEAT_MODE',
      repeatModeIndex: rMode,
    });
    spotify.setRepeat(REPEAT_MODE[rMode]);
  };

  const addToFavourite = () => {
    // @ts-ignore
    spotify.addToMySavedTracks([item.id]);
    dispatch({
      type: 'SET_LIKE',
      isLiked: true,
    });
  };

  const removeFromFavourite = () => {
    spotify.removeFromMySavedTracks([item.id]);
    dispatch({
      type: 'SET_LIKE',
      isLiked: false,
    });
  };

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const splay = new SpotifyWebPlayBackAPI(token, playerLoaded, stateChange);
  }, [spotify]);

  const repeatMode = [
    <RepeatIcon onClick={() => toggleRepeatMode()} />,
    <RepeatOneIcon className="footer__green" onClick={() => toggleRepeatMode()} />,
    <RepeatIcon className="footer__green" onClick={() => toggleRepeatMode()} />,
  ];

  return !deviceId
    ? (
      <div className="footer">
        <p>Loading...</p>
      </div>
    )
    : (
      <div className="footer">
        <div className="footer__left">
          <div className="img__container">
            <ImageLoad
              classes="footer__albumLogo"
              src={item?.album.images[0].url}
              alt={item?.name}
            />
          </div>
          <div className="footer__songInfo">
            <h4>{item && truncate(item?.name, 30, '...')}</h4>
            <p>{item?.artists.map((artist: any) => artist.name).join(', ')}</p>
          </div>
          {!isLiked
            ? <FavoriteBorderIcon onClick={addToFavourite} />
            : <FavoriteIcon className="footer__green" onClick={removeFromFavourite} />}
        </div>
        <div className="footer__center">
          <ShuffleIcon className="footer__green" onClick={toggleShuffle} />
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
          {repeatMode[repeatModeIndex]}
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
