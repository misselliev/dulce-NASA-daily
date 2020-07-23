import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {
  Container, Header, Segment, Image, Icon, Button, Card,
} from 'semantic-ui-react';
// import PropTypes from 'prop-types';
import favoritesActions from '../Redux/favoritesActions';

const Favorites = () => {
  const favorites = useSelector(state => state.favorites.favorites, shallowEqual) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(favoritesActions.fetchFavorites());
  }, [dispatch]);

  const removeFromFavorites = item => {
    dispatch(favoritesActions.removeFromFavorites(item));
  };

  const {
    url, title, date, explanation, copyright,
  } = favorites;
console.log(favorites);
  return (
    <Container>
      <Header as="h1">Favorites</Header>
      <Segment raised>
        {favorites.map(item => (
          <Card key={item.title}>
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
              <Button basic color="red" className="segment-btn" onClick={removeFromFavorites(item)}>
                <Icon name="heart" />
                Remove from Favorite
              </Button>
            </div>
          </Card>
        ))}
      </Segment>
    </Container>
  );
};

// Favorites.propTypes = {
//   favoritesObject: PropTypes.objectOf(PropTypes.object).isRequired,
// };

export default Favorites;
