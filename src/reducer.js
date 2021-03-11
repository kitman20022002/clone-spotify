export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // eslint-disable-next-line max-len
  // token: 'BQDOta_X3uIrTPyMxKt1NovLvBK51YqUCGmEL7uUSQviBOA-Zy4jkyzIeqMFBLcsZFOwsZoB-eCA-PPywL87jnCdn6ghv9fLPe1x5UZCkJWLBRb6QPy38Gx3lfZGgSd_bwsxN9ZGfBUVwpYJ3zjXOi46IrQJ1KykqFn3J1eATdWqfh2BBetn',
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
    default:
      return state;
  }
};

export default reducer;
