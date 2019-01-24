import gql from 'graphql-tag';

const query = gql`
  query {
    allUsers {
      id
      name
    }
  }
`;

export default query;