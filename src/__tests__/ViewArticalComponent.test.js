import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import ViewArticalComponent from "../components/ViewArticalComponent";
const mockStore = configureStore([]);

describe("ViewArticalComponent", () => {
  const date = new Date();
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
    ],
  });
  test("should pass", () => {
    const history = createMemoryHistory({
      initialEntries: ["/view-artical/1"],
    });
    const { getByText } = render(
      <Provider store={store}>
        <Router history={history} component={ViewArticalComponent}></Router>
      </Provider>
    );
    expect(history.location.pathname).toBe("/view-artical/1");
  });
  it("should render with given state from Redux store ViewArticalComponent", () => {
    let component = renderer.create(
      <Provider store={store}>
        <ViewArticalComponent />
      </Provider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
