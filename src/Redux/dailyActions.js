import axios from 'axios';

const loadDaily = daily => ({
  type: 'LOAD_DAILY',
  payload: daily,
});

const fetchDaily = () => dispatch => {
  axios.get('https://api.nasa.gov/planetary/apod?api_key=v9S9pmY9N2jggrtQqzmRxiPtsWLoB9GsrbbpY4b9&date=2020-07-20').then(res => {
    dispatch(loadDaily(res.data));
  }).catch(error => {
    throw (error);
  });
};

export default {
  fetchDaily,
};
