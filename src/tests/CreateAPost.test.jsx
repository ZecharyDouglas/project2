import React from "react";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import CreateAPost from "../pages/CreateAPost";
import { store } from "../features/store";
import { expect } from "@jest/globals";
import "@testing-library/jest-dom/extend-expect";

describe("Create a post tests", () => {
  test("Testing the CreateAPost component to see if it renders ", () => {
    render(
      <Provider store={store}>
        <CreateAPost />
      </Provider>
    );
    expect(screen.getByText("Share your thoughts below")).toBeInTheDocument();
  });
});
