import React from "react";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";
import { store } from "../features/store";
import { expect } from "@jest/globals";
import "@testing-library/jest-dom/extend-expect";

describe("Home component tests", () => {
  test("Testing the CreateAPost component to see if it renders ", () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    expect(screen.getByText("Here are your Posts so Far!")).toBeInTheDocument();
  });
});
