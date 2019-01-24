import gql from 'graphql-tag';

const query = gql`
  query {
    allPosts(orderBy: updatedAt_DESC, first: 7){
      id
      title
      user {
        id
        name
      }
    }
  }
`;

export default query;