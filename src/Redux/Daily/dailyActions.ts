import axios from 'axios';
import { Dispatch } from 'react';
import { Day, Error, LoadDayAction, ErrorLoadAction } from './DailyTypes';
import { ActionCreator } from 'redux';

const API_KEY = process.env.REACT_APP_API_KEY;

const loadDay = (day: string) => ({
    type: 'LOAD_DAY',
    payload: day,
});

const errorLoad = (error: string) => ({
    type: 'ERROR_LOAD',
    payload: error,
});

const fetchDay: ActionCreator<LoadDayAction> = (date: string) => (dispatch: Dispatch<LoadDayAction>) => {
    axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}${date !== ' ' ? `&date=${date}` : ''}`)
        .then((res) => {
            dispatch(loadDay(res.data));
        })
        .catch((error) => {
            dispatch(errorLoad(error.response.data.msg));
        });
};

export default {
    fetchDay,
};
