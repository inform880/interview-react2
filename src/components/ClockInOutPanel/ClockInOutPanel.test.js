import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ClockInOutPanel from "./ClockInOutPanel";

test("renders text box and start button", () => {
  const { getByRole } = render(<ClockInOutPanel />);

  expect(getByRole("button")).toHaveTextContent("start");
  expect(getByRole("textbox")).toBeInTheDocument();
});

test("start button switches to stop after filling in description and clicking button", () => {
  const { getByText, getByRole } = render(<ClockInOutPanel />);
  
  fireEvent.change(getByRole("textbox"), {
    target: { value: "test description" }
  });
  fireEvent.click(getByText("start"));

  expect(getByRole("button")).toHaveTextContent("stop");

  expect(getByText("test description")).toBeInTheDocument();
});

test("After stop button is pressed, description is cleared and the input comes back", () => {
  const { getByText, getByRole } = render(<ClockInOutPanel />);
  
  fireEvent.change(getByRole("textbox"), {
    target: { value: "test description" }
  });
  fireEvent.click(getByText("start"));
  fireEvent.click(getByText("stop"));


  expect(getByRole("button")).toHaveTextContent("start");
  expect(getByRole("textbox")).toBeInTheDocument();
  expect(getByRole("textbox").value).toBe("");
});
