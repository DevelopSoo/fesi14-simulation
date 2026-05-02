// src/app/page.test.tsx

import { render, screen } from "@testing-library/react";
import Home from "./page";

test(" 테스트", () => {
  render(<Home />);
  const element = screen.getByText("테스트");
  expect(element).toBeInTheDocument();
});
