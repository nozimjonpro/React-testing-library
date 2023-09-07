import { screen, render } from "../../test-utils";
import { MuiMode } from "./MuiMode";
import { AppProviders } from "../../providers/app.provider";

describe("MuiMode", () => {
  test("render text correctly", () => {
    render(<MuiMode />);

    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("dark mode");
  });
});
