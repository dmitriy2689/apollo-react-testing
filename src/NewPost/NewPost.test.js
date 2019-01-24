import React from 'react';
import { MockedProvider } from "react-apollo/test-utils";
import { shallow, mount, render } from 'enzyme';
import wait from "waait";
import NewPost from './NewPost';
import mutation from './NewPost.mutation';

it('should render users list', async () => {
  const mocks = [{
    request: {
      query: mutation,
      variables: {userId: "1", title: "1", text: "1"},
    },
    result: { data: { createPost:
      { id: '1' }
    }}
  }];

  const routerParams = { params: {userId: '1'}};

  const wrapper = mount(
    <MockedProvider mocks={mocks} addTypename={false}>
      <NewPost match={routerParams} />
    </MockedProvider>
  );

  const title = wrapper.find("#title").getDOMNode();
  title.value = "1"

  const text = wrapper.find("#text").getDOMNode();
  text.value = "1"

  wrapper.find('button').simulate('submit');

  await wait(0);

  expect(wrapper).toMatchSnapshot();
})
