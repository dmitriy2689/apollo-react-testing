import React from 'react';
import { MockedProvider } from "react-apollo/test-utils";
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import wait from "waait";
import AllUsers from './AllUsers';
import query from './AllUsers.query';

it('should render users list', async () => {
  const mock = {
    request: { query },
    result: { data: { allUsers: [
      { id: "1", name: "name1" },
      { id: "2", name: "name2" }
    ]}}
  };

  const wrapper = shallow(
    <BrowserRouter>
      <MockedProvider mocks={[mock]} addTypename={false}>
        <AllUsers />
      </MockedProvider>
    </BrowserRouter>
  );

  await wait(0);

  expect(wrapper).toMatchSnapshot();
})
