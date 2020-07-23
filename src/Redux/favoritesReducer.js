export default (state = {}, { type, payload }) => {
  switch (type) {
    case 'LOAD_FAVORITES':
      return { ...state, favorites: payload };
    case 'ADD_FAVORITE':
      return { ...state, favorites: [...state.favorites, payload] };
    // case 'REMOVE_FAVORITE':
    //   return { ...state, favorites: state.favorite.filter(item => item.date !== payload.date) };
    default:
      return state;
  }
};
