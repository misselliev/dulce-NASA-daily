export default (state = {}, { type, payload }) => {
  switch (type) {
    case 'LOAD_DAILY':
      return { ...state, daily: payload };
    default:
      return state;
  }
};
