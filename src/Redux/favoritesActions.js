const addFavorite = item => ({
  type: 'ADD_FAVORITE',
  payload: item,
});

const removeFavorite = item => ({
  type: 'REMOVE_FAVORITE',
  payload: item,
});

const loadFavorites = favorites => ({
  type: 'LOAD_FAVORITES',
  payload: favorites,
});

const addToFavorites = item => dispatch => {
  dispatch(addFavorite(item));
};

const fetchFavorites = favorites => dispatch => {
  dispatch(loadFavorites(favorites));
};

const removeFromFavorites = item => dispatch => {
  dispatch(removeFavorite(item));
};

export default {
  addToFavorites,
  fetchFavorites,
  removeFromFavorites,
};
