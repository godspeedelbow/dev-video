import React from 'react';

import { Header, Image, Card } from 'semantic-ui-react';
import VideoList from './video-list';

import { getSpeaker, videosBySpeaker } from './data';

import { PLAYER_WIDTH } from './constants';

const Speaker = ({ match }) => {
  const name = match.params.name;
  const speaker = getSpeaker(name);
  const videos = videosBySpeaker(name);
  return (
    <div>
      <Header as="h1">
        Videos by <code>{speaker.fullName}</code>
      </Header>

      <Card style={{ width: PLAYER_WIDTH }}>
        <Image fluid src={speaker.image} alt={speaker.fullName} />
        <Card.Content>
          <Card.Header>{speaker.fullName}</Card.Header>
          <Card.Description>
            <a href={speaker.twitter}>twitter</a>
            <br />
            <a href={speaker.github}>github</a>
          </Card.Description>
        </Card.Content>
      </Card>
      <VideoList videos={videos} />
    </div>
  );
};
export default Speaker;
