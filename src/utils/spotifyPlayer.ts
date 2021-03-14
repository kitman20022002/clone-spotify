// @ts-ignore
type SpotifyPlayerCallback = (token: string) => void;

export type WebPlaybackErrors =
  | 'initialization_error'
  | 'authentication_error'
  | 'account_error'
  | 'playback_error';

// eslint-disable-next-line no-unused-vars
interface WebPlaybackError {
  message: WebPlaybackErrors;
}

class SpotifyWebPlayBackAPI {
  player: any;

  // @ts-ignore
  // eslint-disable-next-line max-len
  token: string = 'BQCzPBOrLachLFESJbKQ7eOKvcLo9jsT4GaA2bN-7KlRdY4voWqe2Y7UtXrA_ZRSUHuaWO8_-qdrzZx-GWGoZniA9_Jag9iJgf-EAgfwjMuLGJW9WavuLYu5BMkoMyUSbDqILx53Ge8oo1MQ2cIICNlETxbNCnEy6pLrUOD9plXy-v6euR2_Xrdi1NI9lUw-sstD_yXnw4JAkYMlV7cGWPxud1_Sg-Y6Jy6FJ1hxef9dwEDO-SRqKWAmVK5_vT56Bsyk4ZJV-UBL9rh2QuZx3Ex7Ogr4ExURaJ2lR0PKaZ0z';

  deviceId: any;

  ready : any = false

  constructor(token : string, ready :any, stateChange: any, webPlayerName ?: string) {
    // @ts-ignore
    window.onSpotifyWebPlaybackSDKReady = () => {
      // eslint-disable-next-line max-len
      // @ts-ignore
      const player = new window.Spotify.Player({
        name: webPlayerName,
        getOAuthToken: (cb: SpotifyPlayerCallback) => {
          cb(token);
        },
      });

      // @ts-ignore
      // eslint-disable-next-line camelcase
      player.addListener('ready', ready);

      // @ts-ignore
      player.addListener('initialization_error', ({ message }) => { console.error(message); });
      // @ts-ignore
      player.addListener('authentication_error', ({ message }) => { console.error(message); });
      // @ts-ignore
      player.addListener('account_error', ({ message }) => { console.error(message); });
      // @ts-ignore
      player.addListener('playback_error', ({ message }) => { console.error(message); });

      // Playback status updates
      // @ts-ignore
      player.addListener('player_state_changed', stateChange);

      // Not Ready
      // @ts-ignore
      // eslint-disable-next-line camelcase
      player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
      });

      // Connect to the player!
      player.connect();
      // this.loadSpotifyPlayer();
    };
  }
}

export default SpotifyWebPlayBackAPI;
