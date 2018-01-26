import React, { Component } from 'react';

import { Grid, Header } from 'semantic-ui-react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Speaker from './speaker';
import Event from './event';
import Tech from './tech';
import Home from './home';

import { ApolloProvider } from 'react-apollo';
import graphql from './lib/graphql';

const About = () => [<h2>About</h2>, 'just watch it'];

class App extends Component {
  render() {
    return (
      <ApolloProvider client={graphql}>
        <div className="App">
          <Router>
            <Grid centered columns={3}>
              <Grid.Column>
                <Header
                  as="h4"
                  style={{
                    marginTop: 5,
                    marginBottom: 30,
                    borderBottom: '1px solid #bbb'
                  }}
                >
                  <Link
                    to={'/'}
                    style={{
                      color: '#333',
                      fontWeight: '600',
                      textDecoration: 'none'
                    }}
                  >
                    all
                  </Link>
                  <Link
                    to={'/about'}
                    style={{
                      color: '#333',
                      fontWeight: '600',
                      textDecoration: 'none',
                      marginLeft: 10
                    }}
                  >
                    about
                  </Link>
                </Header>
                <Route path="/event/:name" component={Event} />
                <Route path="/speaker/:name" component={Speaker} />
                <Route path="/tech/:name" component={Tech} />
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
              </Grid.Column>
            </Grid>
          </Router>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
