export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  discoverWeekly: null,
  token: null,
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
    default:
      return state;
  }
};

export default reducer;
