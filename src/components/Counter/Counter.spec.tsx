import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter", () => {
  test("render correctly", () => {
    render(<Counter />);

    //     const countElement = screen.getByRole("heading");
    //     expect(countElement).toBeInTheDocument();

    //     const incrementButton = screen.getByRole("button", {
    //       name: "Increment",
    //     });
    //     expect(incrementButton).toBeInTheDocument();
    //   });

    //   test("renders count of 0", () => {
    //     render(<Counter />);
    //     const countElement = screen.getByRole("heading");
    //     expect(countElement).toHaveTextContent("0");
    //   });

    //   test("renders count of one after clicking increment button", async () => {
    //     user.setup();
    //     render(<Counter />);
    //     const incrementButton = screen.getByRole("button", {
    //       name: "Increment",
    //     });
    //     await user.click(incrementButton);

    //     const counterElement = screen.getByRole("heading");
    //     expect(counterElement).toHaveTextContent("1");
    //   });

    //   test("renders count of one after clicking increment button", async () => {
    //     user.setup();
    //     render(<Counter />);
    //     const incrementButton = screen.getByRole("button", {
    //       name: "Increment",
    //     });
    //     await user.dblClick(incrementButton);

    //     const counterElement = screen.getByRole("heading");
    //     expect(counterElement).toHaveTextContent("2");
    //   });

    //   test("renders count of 10 after clicking set button ", async () => {
    //     user.setup();
    //     render(<Counter />);
    //     const amountInput = screen.getByRole("spinbutton");
    //     await user.type(amountInput, "10");
    //     expect(amountInput).toHaveValue(10);

    //     const setButton = screen.getByRole("button", {
    //       name: "Set",
    //     });
    //     await user.click(setButton);
    //     const countElement = screen.getByRole("heading");
    //     expect(countElement).toHaveTextContent("10");
    //   });

    //   test("elements focused in right order", async () => {
    //     user.setup();
    //     render(<Counter />);
    //     const amountInput = screen.getByRole("spinbutton");
    //     const setButton = screen.getByRole("button", {
    //       name: "Set",
    //     });
    //     const incrementButton = screen.getByRole("button", {
    //       name: "Increment",
    //     });
    //     await user.tab();
    //     expect(incrementButton).toHaveFocus();
    //     await user.tab();
    //     expect(amountInput).toHaveFocus();
    //     await user.tab();
    //     expect(setButton).toHaveFocus();
  });
});

export {};
