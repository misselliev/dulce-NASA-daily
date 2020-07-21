import React, { useState, useEffect } from 'react';
import {
  Segment, Image, Button, Icon, Header, Form,
} from 'semantic-ui-react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import dailyActions from '../Redux/dailyActions';

const ImageCard = () => {
  const daily = useSelector(state => state.daily.daily, shallowEqual) || [];
  const [search, setSearch] = useState('');
  const [newDate, setDate] = useState('');
  const dispatch = useDispatch();

  const selectDay = newDate => {
    dispatch(dailyActions.fetchDay(newDate));
  };

  useEffect(() => {
    dispatch(dailyActions.fetchDaily());
  }, [dispatch, newDate]);

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getDate = e => {
    e.preventDefault();
    setDate(search);
    setSearch('');
  };

  const {
    url, title, date, explanation, copyright,
  } = daily;

  return (
    <Segment raised>
      <Image src={url} wrapped ui={false} />
      <div className="information">
        <Header as="h2">{title}</Header>
        <Header as="h3">{date}</Header>
        <div className="description">
          {explanation}
        </div>
        <Header as="h4">
          Copyright:
          {copyright}
        </Header>
      </div>
      <div className="buttons">
        <Button basic color="red" className="favorite-btn">
          <Icon name="heart" />
          Set as Favorite
        </Button>
        <Form className="search" onSubmit={getDate}>
          <Form.Input
            className="segment-btn"
            placeholder="YYYY/MM/DD"
            value={search}
            onChange={updateSearch}
            label="Date"
          />
          <Button basic color="blue" type="submit" className="segment-btn" onClick={selectDay(newDate)}>
            <Icon name="search" />
            Search another day
          </Button>
        </Form>
      </div>
    </Segment>
  );
};

export default ImageCard;
