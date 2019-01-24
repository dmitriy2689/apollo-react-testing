import gql from 'graphql-tag';

const mutation = gql`
  mutation createPost($text: String!, $title: String!, $userId: ID!){
    createPost(text: $text, title: $title, userId: $userId) {
      id
    }
  }
`;

export default mutation;