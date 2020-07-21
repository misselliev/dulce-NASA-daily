export default (state = {}, { type, payload }) => {
  switch (type) {
    case 'LOAD_DAILY':
      return { ...state, daily: payload };
    case 'LOAD_DAY':
      return { ...state, daily: payload };
    default:
      return state;
  }
};
