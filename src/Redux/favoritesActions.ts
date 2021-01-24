// import firebase from '../firebaseConfig';

import { Dispatch } from "react";
import { ActionCreator } from "redux";

// const databaseRef = firebase.database().ref();
// const favoritesRef = databaseRef.child('favorites');

const addFavorite = (item: string) => ({
    type: 'ADD_FAVORITE',
    payload: item,
});

const removeFavorite = (item: string) => ({
    type: 'REMOVE_FAVORITE',
    payload: item,
});

const loadFavorites = (favorites: string[]) => ({
    type: 'LOAD_FAVORITES',
    payload: favorites,
});

const addToFavorites = (item: string) => (dispatch: Dispatch<>) => {
    dispatch(addFavorite(item));
    // favoritesRef.push().set(item);
};

const fetchFavorites = (favorites: any) => (dispatch: Dispatch<>) => {
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

const removeFromFavorites: ActionCreator<any> = (item: string) => (dispatch: Dispatch<string>) => {
    dispatch(removeFavorite(item));
};

export default {
    addToFavorites,
    fetchFavorites,
    removeFromFavorites,
};
