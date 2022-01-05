import React from "react";
import { render } from "@testing-library/react";

import Button from "./Button";

// check if button is rendered on screen
describe("Button", () => {
  test("Button renders", () => {
    render(<Button label="Hello Sweet!" />);
  });
});
