import React, { useEffect } from 'react';
import {
  Segment, Image, Button, Icon, Header,
} from 'semantic-ui-react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import dailyActions from '../Redux/dailyActions';

const ImageCard = () => {
  const daily = useSelector(state => state.daily.daily, shallowEqual) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dailyActions.fetchDaily());
  }, [dispatch]);

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
      <Button basic color="red" className="favorite-btn">
        <Icon name="heart" />
        Set as Favorite
      </Button>
    </Segment>
  );
};

export default ImageCard;
