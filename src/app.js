import React, { Component } from 'react';
import VideoList from './video-list';
import { Grid, Header } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid centered columns={3}>
          <Grid.Column>
            <Header as="h1" style={{ marginBottom: 0 }}>
              <code
                style={{
                  fontWeight: 'normal'
                }}
              >
                dev-video
              </code>
            </Header>
            <Header as="h4" style={{ marginTop: 0, marginBottom: 30 }}>
              the best developer videos
            </Header>
            <VideoList />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
