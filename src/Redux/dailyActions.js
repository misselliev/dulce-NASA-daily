import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

const loadDay = day => ({
  type: 'LOAD_DAY',
  payload: day,
});

const errorLoad = error => ({
  type: 'ERROR_LOAD',
  payload: error,
});

const fetchDay = date => dispatch => {
  axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}${date !== ' ' ? `&date=${date}` : ''}`).then(res => {
    dispatch(loadDay(res.data));
  }).catch(error => {
    dispatch(errorLoad(error.response.data.msg));
  });
};

export default {
  fetchDay,
};
