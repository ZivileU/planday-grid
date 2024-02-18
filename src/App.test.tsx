import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders app container", () => {
  render(<App />);
  const app = screen.getByTestId("app");
  expect(app).toBeInTheDocument();
});
