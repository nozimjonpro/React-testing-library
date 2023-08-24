import { render, screen } from "@testing-library/react";
import Greet from "./Greet";
import { toBeInTheDocument } from "@testing-library/jest-dom/matchers";

describe("Greet component", () => {
  test("Greet component render correctly", () => {
    render(<Greet />);

    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });

  test("Greed renders with name", () => {
    render(<Greet name="Abdulla" />);
    const textElement = screen.getByText(/Hello Abdulla/i);
    expect(textElement).toBeInTheDocument();
  });
});
