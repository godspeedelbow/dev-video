import React from 'react';
import ReactPlayer from 'react-player';
import { Card, Icon, Label } from 'semantic-ui-react';

const PLAYER_RATIO = 640 / 360;
const PLAYER_WIDTH = 400; // beware of parent's grid column width
const PLAYER_HEIGHT = PLAYER_WIDTH / PLAYER_RATIO;

const Video = ({ video }) => (
  <Card style={{ width: PLAYER_WIDTH }}>
    <ReactPlayer
      width={PLAYER_WIDTH}
      height={PLAYER_HEIGHT}
      controls
      url={video.source.url}
    />
    <Card.Content>
      <Card.Header>
        {video.title}{' '}
        <small
          style={{
            color: '#999',
            fontWeight: 'normal',
            borderBottom: '1px dotted'
          }}
        >
          {video.duration}
        </small>
      </Card.Header>
      <Card.Meta>{prettyDate(video.date)}</Card.Meta>
      <Card.Description>
        <p>
          <Label
            as="a"
            href={`speaker/${video.speaker.name}`}
            target="_blank"
            image
          >
            <img src={video.speaker.image} alt={video.speaker.fullName} />
            {video.speaker.fullName}
          </Label>
          <Label
            as="a"
            href={`event/${video.event.name}`}
            target="_blank"
            image
          >
            <img src={video.event.logo} alt={video.event.title} />
            {video.event.title}
          </Label>
        </p>
        <p>
          {video.tags.map(tag => (
            <Label as="a" href={`tag/${tag.name}`}>
              {tag.title}
            </Label>
          ))}
        </p>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name="user" />
        10 views
      </a>
    </Card.Content>
  </Card>
);

export default Video;

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

function prettyDate(date) {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return `${months[month]} ${day}, ${year}`;
}
