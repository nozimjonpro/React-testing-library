import { render, screen } from "@testing-library/react";
import Application from "./Application";

describe("Application", () => {
  it("should renders correctly", () => {
    render(<Application />);

    const pageHeading = screen.getByRole("heading", {
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", {
      level: 2,
    });
    expect(sectionHeading).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElement).toBeInTheDocument();

    const nameElement2 = screen.getByLabelText("Name", {
      selector: "input",
    });
    expect(nameElement2).toBeInTheDocument();

    const nameElement3 = screen.getByPlaceholderText("fullname");
    expect(nameElement3).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioElement).toBeInTheDocument();

    const bioElement2 = screen.getByLabelText("Bio");
    expect(bioElement2).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const termsElement2 = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(termsElement2).toBeInTheDocument();

    const submitElement = screen.getByRole("button");
    expect(submitElement).toBeInTheDocument();
    expect(submitElement).not.toBeEnabled();

    const paragraphElement = screen.getByText("John Doe");
    expect(paragraphElement).toBeInTheDocument();

    const paragraphElement1 = screen.getByText("Harry Potter");
    expect(paragraphElement1).toBeInTheDocument();

    const nameElement4 = screen.getByDisplayValue("Dilnavoz");
    expect(nameElement4).toBeInTheDocument();

    const imageElement = screen.getByAltText((content) =>
      content.startsWith("this is")
    );
    expect(imageElement).toBeInTheDocument();

    const spanElement = screen.getByTitle("it is a span element");
    expect(spanElement).toBeInTheDocument();

    const testElement = screen.getByTestId("hello shmello", { exact: false });
    expect(testElement).toBeInTheDocument();
  });
});

export {};
