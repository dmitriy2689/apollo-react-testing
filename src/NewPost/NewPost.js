import React from 'react';
import { Mutation } from 'react-apollo';
import query from '../TopPosts/TopPosts.query';
import mutation from './NewPost.mutation';

const NewPost = (props) => (
  <Mutation
    mutation={mutation}
    /*update={(cache, { data: { createPost } }) => {
      const { allPosts } = cache.readQuery({ query });
      cache.writeQuery({
        query,
        data: { allPosts: allPosts.concat([createPost]) },
      });
    }}*/
  >
    {(createPost, { loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      let userId, title, text;

      return (
        <form onSubmit={e => {
          e.preventDefault();
          createPost({ variables: {
            userId: userId.value ,
            title: title.value ,
            text: text.value ,
          }});
        }}>
          <input
            id="userId"
            type='hidden'
            value={ props.match.params.userId }
            ref={ node =>  userId = node }
          />
          <input
            id="title"
            type='text'
            ref={ node =>  title = node }
          />
          <textarea
            id="text"
            ref={ node =>  text = node }
          />
          <button type='submit'>Add</button>
        </form>
      );
    }}
  </Mutation>
);

export default NewPost;