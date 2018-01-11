import React from 'react';

import ReactPlayer from 'react-player';
import { Card, Icon, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { getSpeaker, getEvent, getTech } from './data';

import { PLAYER_WIDTH, PLAYER_HEIGHT } from './constants';

const Video = ({ video }) => {
  const speaker = getSpeaker(video.speaker);
  const event = getEvent(video.event);
  const tech = video.tech.map(getTech);

  return (
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
            <Link to={`/speaker/${speaker.name}`}>
              <Label as="span" style={{ marginLeft: 3 }} image>
                <img src={speaker.image} alt={speaker.fullName} />
                {speaker.fullName}
              </Label>
            </Link>
            <Link to={`/event/${event.name}`}>
              <Label as="span" style={{ marginLeft: 3 }} image>
                <img src={event.logo} alt={event.title} />
                {event.title}
              </Label>
            </Link>
          </p>
          <p>
            {tech.map(tech => (
              <Link to={`/tech/${tech.name}`} key={tech.name}>
                <Label as="span" style={{ marginLeft: 3 }}>
                  {tech.title}
                </Label>
              </Link>
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
};

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
