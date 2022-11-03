import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import HeaderComponent from "../components/HeaderComponent";

const mockStore = configureStore([]);

describe("HeaderComponent Component", () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      users: [
        {
          id: 1,
          email: "admin@gmail.com",
          password: "123456",
          authMode: "signin",
        },
      ],
      articals: [
        {
          id: 1,
          title: "johndo@example.com",
          author: "Test",
          createdAt: "" + new Date(),
          content: "sdfhdsjh",
          tag: "d",
        },
        {
          id: 2,
          title: "test@123",
          author: "Test1",
          createdAt: "" + new Date(),
          content: "sdfhdsjh",
          tag: "a",
        },
        {
          id: 3,
          title: "h@123",
          author: "Test2",
          createdAt: "" + new Date(),
          content: "sdfhdsjh1",
          tag: "b",
        },
      ],
    });

    component = renderer.create(
      <Provider store={store}>
        <HeaderComponent />
      </Provider>
    );
  });

  it("should render with given state from Redux store", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
