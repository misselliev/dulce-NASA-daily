import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {
  Container, Header, Segment, Image, Icon, Button,
} from 'semantic-ui-react';
import favoritesActions from '../Redux/favoritesActions';

const Favorites = () => {
  const favorites = useSelector(state => state.favorites.favorites, shallowEqual) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(favoritesActions.fetchFavorites(favorites));
  }, [dispatch, favorites]);

  const removeFromFavorites = item => {
    dispatch(favoritesActions.removeFromFavorites(item));
  };

  return (
    <Container>
      <Header as="h1" className="main-header">Favorites</Header>
      <Segment raised>
        {/* {favorites.length !== '0' && (
          <div className="test">
            <h3>Currently, you have no favorites</h3>
          </div>
        )} */}
        {favorites.map(({
          title, date, explanation, copyright, url,
        }) => (
          <Segment key={date}>
            <Image src={url} wrapped ui={false} />
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
            <div className="buttons">
              <Button basic color="red" className="segment-btn" onClick={() => removeFromFavorites(date)}>
                <Icon name="heart" />
                Remove from Favorite
              </Button>
            </div>
          </Segment>
        ))}
      </Segment>
    </Container>
  );
};

export default Favorites;
