export const authEndpoint = 'https://accounts.spotify.com/authorize';

const redirectUri = 'http://localhost:3011/';
const clientId = '006caa563690487ca0cdc763d226c30b';

const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state',
];

export const getTokenFromUrl = () => window.location.hash.substr(1).split('&').reduce(
  (initial, item) => {
    const parts = item.split('=');
    // eslint-disable-next-line no-param-reassign
    initial[parts[0]] = decodeURIComponent(parts[1]);
    return initial;
  }, {},
);

// eslint-disable-next-line max-len
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;
