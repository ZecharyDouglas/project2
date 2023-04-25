import React from "react";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import UpdatePost from "../pages/UpdatePost";
import { store } from "../features/store";
import { expect } from "@jest/globals";
import "@testing-library/jest-dom/extend-expect";

describe("UpdatePost component tests", () => {
  test("Testing the UpdatePost component to see if it renders ", () => {
    render(
      <Provider store={store}>
        <UpdatePost />
      </Provider>
    );
    expect(screen.getByText("Share your thoughts below")).toBeInTheDocument();
  });
});
