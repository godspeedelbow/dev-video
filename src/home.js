import React from 'react';
import VideoList from './video-list';

import { Header } from 'semantic-ui-react';

import { videos } from './data';

const Home = () => {
  return (
    <div>
      <Header as="h1">Videos by/for developers</Header>
      <VideoList videos={videos} />
    </div>
  );
};
export default Home;
