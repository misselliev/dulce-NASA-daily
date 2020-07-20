import React from 'react';
import {
  Segment, Image, Button, Icon, Header,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const ImageCard = props => {
  const {
    url, title, date, explanation, copyright,
  } = props;
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

ImageCard.propTypes = {

  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  explanation: PropTypes.string.isRequired,
  copyright: PropTypes.string.isRequired,

};

export default ImageCard;
