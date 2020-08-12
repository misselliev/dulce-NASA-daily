// import firebase from '../firebaseConfig';

import { Dispatch } from 'react';
import { ActionCreator } from 'redux';
import { Favorite, Favorites, AddFavoriteAction, RemoveFavoriteAction, LoadFavoritesAction } from './FavoritesTypes';

// const databaseRef = firebase.database().ref();
// const favoritesRef = databaseRef.child('favorites');

export const addFavorite = (item: Favorite): AddFavoriteAction => ({
    type: 'ADD_FAVORITE',
    payload: item,
});

export const removeFavorite = (item: Favorite): RemoveFavoriteAction => ({
    type: 'REMOVE_FAVORITE',
    payload: item,
});

const loadFavorites = (favorites: Favorites): LoadFavoritesAction => ({
    type: 'LOAD_FAVORITES',
    payload: favorites,
});

const addToFavorites: ActionCreator<AddFavoriteAction> = (item: Favorite) => (
    dispatch: Dispatch<AddFavoriteAction>,
) => {
    return dispatch(addFavorite(item));
    // favoritesRef.push().set(item);
};

const fetchFavorites: ActionCreator<LoadFavoritesAction> = (favorites: Favorite[]) => (
    dispatch: Dispatch<LoadFavoritesAction>,
) => {
    dispatch(loadFavorites(favorites));
    // if (favoritesRef !== null) {
    //   favoritesRef.on('value', snapshot => {
    //     dispatch({
    //       type: 'FETCH_FAVORITES',
    //       payload: snapshot.val(),
    //     });
    //   });
    // }
};

const removeFromFavorites: ActionCreator<RemoveFavoriteAction> = (item: Favorite) => (
    dispatch: Dispatch<RemoveFavoriteAction>,
) => {
    dispatch(removeFavorite(item));
};

export default {
    addToFavorites,
    fetchFavorites,
    removeFromFavorites,
};
