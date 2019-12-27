import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ActivityGrid from "./ActivityGrid";

test("renders grid with headers", () => {
  const { getByText } = render(<ActivityGrid />);

  expect(getByText("start time")).toBeInTheDocument();
  expect(getByText("end time")).toBeInTheDocument();
  expect(getByText("duration")).toBeInTheDocument();
  expect(getByText("description")).toBeInTheDocument();
});
