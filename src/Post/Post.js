import React from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const query = (postId) => gql`
  query {
    Post(id: "${postId}") {
      id, title, text
    }
  }
`;

const mutation =  gql`
  mutation updatePost($id: ID!, $text: String!, $title: String!){
    updatePost(id: $id, text: $text, title: $title) {
      id, text, title
    }
  }
`;

const Post = (props) => {
  const postId = props.match.params.postId;

  return <Query
    query={query(postId)}
    //fetchPolicy='network-only'
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      let title, text;

      return (
        <Mutation mutation={mutation} key={postId}>
          {updatePost => {
            return <div>
              <div>{data.Post.id}</div>
              <div>{data.Post.title}</div>
              <div>{data.Post.text}</div>

              <form
                onSubmit={e => {
                  e.preventDefault();
                  updatePost({ variables: { id: postId, text: text.value, title: title.value } });
                }}
              >
                <input
                  ref={node => {
                    title = node;
                  }}
                />
                <input
                  ref={node => {
                    text = node;
                  }}
                />
                <button type="submit">Update Post</button>
              </form>
            </div>
          }}
        </Mutation>
      );
    }}
  </Query>
};

export default Post;