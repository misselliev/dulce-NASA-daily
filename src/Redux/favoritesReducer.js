export default (state = {}, { type, payload }) => {
  switch (type) {
    case 'SET FAVORITES':
      return { ...state, favorites: payload };
    default:
      return state;
  }
};
