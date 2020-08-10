import React, { useState, useEffect } from 'react';
import {
  Segment, Image, Button, Icon, Header, Form,
} from 'semantic-ui-react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import dailyActions from '../Redux/dailyActions';
import favoriteActions from '../Redux/favoritesActions';
import 'react-datepicker/dist/react-datepicker.css';

const ImageCard = () => {
  const daily = useSelector(state => state.daily.daily, shallowEqual) || [];
  const error = useSelector(state => state.daily.error, shallowEqual) || [];
  const [search, setSearch] = useState('');
  const [newDate, setDate] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();

  const selectDay = newDate => {
    dispatch(dailyActions.fetchDay(newDate));
  };

  useEffect(() => {
    dispatch(dailyActions.fetchDay(newDate));
  }, [dispatch, newDate, search]);

  const getDate = e => {
    e.preventDefault();
    setDate(search);
    setSearch('');
  };

  const updateDate = date => {
    setStartDate(date);
    setSearch(moment(date).format('YYYY-MM-DD'));
  };

  const addToFavorites = item => {
    dispatch(favoriteActions.addToFavorites(item));
  };

  const getNextDay = date => {
    const nextDate = moment(date).add(1, 'days').format('YYYY-MM-DD');
    dispatch(dailyActions.fetchDay(nextDate));
  };

  const getPastDay = date => {
    const pastDate = moment(date).subtract(1, 'days').format('YYYY-MM-DD');
    dispatch(dailyActions.fetchDay(pastDate));
  };

  const {
    url, title, date, explanation, copyright,
  } = daily;

  return (
    <Segment raised>
      <Image src={url} wrapped ui={false} />
      <div className="nav-buttons">
        <Button onClick={() => getPastDay(daily.date)}>
          <Icon name="angle double left" />
        </Button>
        <Button onClick={() => getNextDay(daily.date)}>
          <Icon name="angle double right" />
        </Button>
      </div>
      <div className="information">
        <Header as="h2">{title}</Header>
        <Header as="h3">{date}</Header>
        <div className="description">
          {explanation}
        </div>
        <Header as="h4">
          {copyright}
        </Header>
      </div>
      {error !== '' && (
      <div className="error">
        {error}
      </div>
      )}
      <div className="bottom-button-container">
        <Button color="green" className="segment-btn" onClick={() => addToFavorites(daily)}>
          <Icon name="heart" />
          Set as Favorite
        </Button>
        <Form className="search" onSubmit={getDate}>
          <DatePicker
            className="segment-btn"
            dateFormat="yyyy/MM/dd"
            selected={startDate}
            onChange={updateDate}
          />
          <Button color="teal" type="submit" className="segment-btn" onClick={() => selectDay(newDate)}>
            <Icon name="search" />
            Search another day
          </Button>
        </Form>
      </div>
    </Segment>
  );
};

export default ImageCard;
