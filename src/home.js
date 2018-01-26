import React from 'react';
import gql from 'graphql-tag';

import { graphql } from 'react-apollo';
import { fragment } from './video';

import { Header } from 'semantic-ui-react';
import VideoList from './video-list';

const Home = props => {
  const { data: { videos = [] } } = props;

  return (
    <div>
      <Header as="h1">Videos by/for developers</Header>
      <VideoList videos={videos} />
    </div>
  );
};

const query = gql`
  query {
    videos {
      ...VideoEntry
      event {
        name
        title
        logo
      }
      technologies {
        name
        title
      }
    }
  }
  ${fragment}
`;

const HomeContainer = graphql(query)(Home);

export default HomeContainer;
