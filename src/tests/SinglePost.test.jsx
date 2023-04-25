import React from "react";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import SinglePost from "../pages/SinglePost";
import { store } from "../features/store";
import { expect } from "@jest/globals";
import "@testing-library/jest-dom/extend-expect";

describe("SinglePost component tests", () => {
  test("Testing the SinglePost component to see if it renders ", () => {
    render(
      <Provider store={store}>
        <SinglePost />
      </Provider>
    );
    expect(screen.getByText("Here are your Posts so Far!")).toBeInTheDocument();
  });
});
