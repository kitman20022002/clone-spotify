export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  discoverWeekly: null,
  token: null,
  deviceId: null,
  activeDevice: null,
  volume: 100,
  mute: false,
  previousVolume: -1,
  queueTracks: [],
  // eslint-disable-next-line max-len
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      };
    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discoverWeekly: action.discoverWeekly,
      };
    case 'SET_PLAYING':
      return {
        ...state,
        playing: action.playing,
      };
    case 'SET_DEVICEID':
      return {
        ...state,
        deviceId: action.deviceId,
      };
    case 'SET_ITEM':
      return {
        ...state,
        item: action.item,
      };
    case 'SET_ACTIVE_DEVICE':
      return {
        ...state,
        activeDevice: action.activeDevice,
      };
    case 'SET_VOLUME':
      return {
        ...state,
        volume: action.volume,
      };
    case 'SET_MUTE':
      return {
        ...state,
        mute: action.mute,
        previousVolume: action.mute ? state.volume : -1,
        volume: action.mute ? 0 : state.previousVolume,
      };
    case 'SET_QUEUE_TRACKS':
      return {
        ...state,
        queueTracks: action.queueTracks,
      };
    default:
      return state;
  }
};

export default reducer;
