import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import CreateArticalComponent from "../components/CreateArticalComponent";
const mockStore = configureStore([]);

describe("CreateArticalComponent", () => {
  test("should pass", () => {
    let store = mockStore({
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
    const history = createMemoryHistory({ initialEntries: ["/add-artical/1"] });
    const { getByText } = render(
      <Provider store={store}>
        <Router history={history} component={CreateArticalComponent}></Router>
      </Provider>
    );
    expect(history.location.pathname).toBe("/add-artical/1");
  });
});
