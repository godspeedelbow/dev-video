import React, { Component } from 'react';
import Video from './video';

import { videos } from './data';

const VideoList = () => videos.map(video => <Video video={video} />);

export default VideoList;
