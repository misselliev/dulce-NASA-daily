import { combineReducers } from 'redux';
import daily from './dailyReducer';
import favorites from './favoritesReducer';

export default combineReducers({ daily, favorites });
