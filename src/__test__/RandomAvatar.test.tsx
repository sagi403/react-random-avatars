import React from "react";
import { render } from "@testing-library/react";
import { RandomAvatar } from "../components/RandomAvatar";

test("renders RandomAvatar component without crashing", () => {
  const { getByTestId } = render(<RandomAvatar />);
  expect(getByTestId("random-avatar")).toBeTruthy();
});
