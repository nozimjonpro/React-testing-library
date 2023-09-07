import { render, screen } from "@testing-library/react";
import Skills from "./Skills";
import { skills } from "../../database/datas";

describe("Skills", () => {
  test("Components render correctly", () => {
    render(<Skills skills={skills} />);

    //     const listElement = screen.getByRole("list");
    //     expect(listElement).toBeInTheDocument();
    //   });

    // test("renders a list of skills", () => {
    //   render(<Skills skills={skills} />);
    //   const listItemElement = screen.getAllByRole("listitem");
    //   expect(listItemElement).toHaveLength(skills.length);
    // });

    // test("renders login button", () => {
    //   render(<Skills skills={skills} />);

    //   const buttonElement = screen.getByRole("button", { name: "Login" });
    //   expect(buttonElement).toBeInTheDocument();
    // });

    // test("start learning button is not rendered", () => {
    //   render(<Skills skills={skills} />);
    //   const startLearningButton = screen.queryByRole("button", {
    //     name: "Start learning",
    //   });
    //   expect(startLearningButton).not.toBeInTheDocument();
    // });

    // test("start learning button is eventually displayed", async () => {
    //   render(<Skills skills={skills} />);
    //   const startLearningButton = await screen.findByRole(
    //     "button",
    //     {
    //       name: "Start learning",
    //     },
    //     {
    //       timeout: 1500,
    //     }
    //   );
    //   expect(startLearningButton).toBeInTheDocument();
  });
});

export {};
