import React from 'react';
import { Link } from 'react-router-dom'
import { Query } from 'react-apollo';
import query from './TopPosts.query';

const TopPosts = () => (
  <Query query={query}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return (
        <ul key='topPosts'>
          {data.allPosts.map(({ id, title, user }) => (
            <li key={id}>
              <Link to={`/post/${id}`}>
                {user ? user.name : 'incognito'}, {title ? title : '***'}
              </Link>
            </li>
          ))}
        </ul>
      );
    }}
  </Query>
);

export default TopPosts;