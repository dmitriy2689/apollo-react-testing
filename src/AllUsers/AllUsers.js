import React from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import query from './AllUsers.query';

const AllUsers = () => (
  <Query query={query}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error!</p>

      return (
        <ul key='allUsers'>
          {data.allUsers.map(({ id, name }) => (
            <li key={id}>
              <Link to={`/user/${id}`}>
                {name ? name : 'incognoito'}>
              </Link>
            </li>
          ))}
        </ul>
      );
    }}
  </Query> 
)

export default AllUsers;