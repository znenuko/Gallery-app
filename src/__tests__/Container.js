import { render, screen } from "@testing-library/react";
import Container from "../components/Container";

describe("<Container />", () => {
  it("Snapshot principal", () => {
    render(<Container />);

    expect(screen.getByLabelText("container")).toMatchSnapshot();
  });
});
