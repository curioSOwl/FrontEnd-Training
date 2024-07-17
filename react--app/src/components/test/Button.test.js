import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "../Button";

describe("Check if button works properly", () => {
  test("check if button rendered correctly", () => {
    const { getByTestId } = render(<Button />);
    const element = getByTestId("button-test-id");
    console.log(element);
    expect(element).toBeTruthy();
  });
  test("check if text displayed properly", () => {
    const text = "create";
    const { getByText } = render(<Button text={text} />);
    getByText(text);
  });
  test("check if onClick is trigerred", () => {
    const onClick = jest.fn();
    const { getByTestId } = render(<Button onClick={onClick} />);
    const element = getByTestId("button-test-id");

    fireEvent.click(element);

    expect(onClick).toHaveBeenCalled();
  });
  test("check if snapshot is matched properly", () => {
    const onClick = jest.fn();
    const text = "Click";

    const { asFragment } = render(<Button text={text} onClick={onClick} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
