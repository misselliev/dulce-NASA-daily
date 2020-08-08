import firebase from '../firebaseConfig';

const databaseRef = firebase.database().ref();
const favoritesRef = databaseRef.child('favorites');

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
  favoritesRef.push().set(item);
};

const fetchFavorites = favorites => dispatch => {
  dispatch(loadFavorites(favorites));
  favoritesRef.on('value', snapshot => {
    dispatch({
      type: 'FETCH_FAVORITES',
      payload: snapshot.val(),
    });
  });
};

const removeFromFavorites = item => dispatch => {
  dispatch(removeFavorite(item));
};

export default {
  addToFavorites,
  fetchFavorites,
  removeFromFavorites,
};
