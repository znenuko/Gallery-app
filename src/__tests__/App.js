import { render, screen } from "@testing-library/react";
import App from "../App.jsx";

test("Snapshot del app", () => {
  render(<App />);

  expect(screen.getByRole("app")).toMatchSnapshot();
});
