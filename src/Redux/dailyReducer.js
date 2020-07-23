export default (state = {}, { type, payload }) => {
  switch (type) {
    case 'LOAD_DAY':
      return { ...state, daily: payload };
    case 'ERROR_LOAD':
      return { ...state, error: payload };
    default:
      return state;
  }
};
