export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const LOAD_FAVORITES = 'LOAD_FAVORITES';

export interface Favorite {
    copyright: string;
    date: string;
    explanation: string;
    url: string;
    title: string;
}

export interface Favorites {
    favorites: Favorite[];
}

export interface AddFavoriteAction {
    type: typeof ADD_FAVORITE;
    payload: Favorite;
}

export interface RemoveFavoriteAction {
    type: typeof REMOVE_FAVORITE;
    payload: Favorite;
}

export interface LoadFavoritesAction {
    type: typeof LOAD_FAVORITES;
    payload: Favorite;
}

// export const FavoriteActionTypes = AddFavoriteAction | RemoveFavoriteAction | LoadFavoritesAction;
