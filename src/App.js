import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import './App.css';

import Layout from './Layout/Layout';
import AllUsers from './AllUsers/AllUsers';
import NewPost from './NewPost/NewPost';
import TopPosts from './TopPosts/TopPosts';
import Post from './Post/Post';

const client = new ApolloClient({
  uri: 'https://api.graph.cool/simple/v1/ciyz901en4j590185wkmexyex',
  onError: () => {
    console.log('error');
  },
  request: (operation) => {
      operation.setContext({ headers: {test: 1253 }})
  }
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path="/" component={AllUsers} />
              <Route exact path="/user/:userId" component={NewPost} />
              <Route exact path="/posts" component={TopPosts} />
              <Route exact path="/post/:postId" component={Post} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;