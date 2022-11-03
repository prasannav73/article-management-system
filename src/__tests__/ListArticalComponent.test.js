import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import ListArticalComponent from '../components/ListArticalComponent';
const mockStore = configureStore([]);

describe('ListArticalComponent', () => {
    const date=new Date();
    let store = mockStore({
        users: [{
            id: 1,
            email: "admin@gmail.com",
            password: "123456",
            authMode: "signin",
          }],
          articals: [
            {
              id: 1,
              title: "johndo@example.com",
              author: "Test",
              createdAt: "" + new Date(),
              content: "sdfhdsjh",
              tag: "d",
            }
          ]
      });
  test('should pass', () => {
    const history = createMemoryHistory({ initialEntries: ['/articals'] });
    const { getByText } = render(
        <Provider store={store}>
            <Router history={history} component={ListArticalComponent}></Router>
      </Provider>
    );
    expect(history.location.pathname).toBe('/articals');
  });
  it("should render with given state from Redux store", () => {
   let component = renderer.create(
        <Provider store={store}>
          <ListArticalComponent/>
        </Provider>
      );
      expect(component.toJSON()).toMatchSnapshot();
  });
});