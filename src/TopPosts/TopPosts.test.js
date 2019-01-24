import React from 'react';
import { MockedProvider } from "react-apollo/test-utils";
import renderer from "react-test-renderer";
import { shallow, mount, render } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import wait from "waait";
import TopPosts from './TopPosts';
import query from './TopPosts.query';

it('should render posts list', async () => {
  const mock = {
    request: { query },
    result: { data: { allPosts: [
      { id: "1", title: "title1", user: {id: "1", name: 'title1'} },
      { id: "2", title: "title2", user: {id: "2", name: 'title2'} }
    ]}}
  };

  const wrapper = shallow(
    <BrowserRouter>
      <MockedProvider mocks={[mock]} addTypename={false}>
        <TopPosts />
      </MockedProvider>
    </BrowserRouter>
  );

  await wait(0);

  expect(wrapper).toMatchSnapshot();
})
