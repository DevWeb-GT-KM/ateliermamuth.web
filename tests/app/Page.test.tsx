import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Page from "../../app/[lang]/page";

describe("Page", () => {
  it("renders a heading", () => {
    const { container } = render(<Page />);

    const test = container.querySelector(".home-page-container");

    expect(test).toBeTruthy();
  });
});
