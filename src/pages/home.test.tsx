import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "./home";

test("renders Home component", () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  // Check if the section titles are rendered
  expect(screen.getByText("이번주 날씨")).toBeInTheDocument();
  expect(screen.getByText("이번주 To-Do")).toBeInTheDocument();

  // Check if the "Add To-Do" button is rendered
  expect(screen.getByText("Add To-Do")).toBeInTheDocument();
});
