import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../header";

test("Header component renders header title", () => {
  // render the component in the render function
  render(<Header />);

  // find element which has this text in it
  let text = screen.getByText(/This is the header mate/i);

  // assert that this element is in the dom or component
  expect(text).toBeInTheDocument();
  expect(text.textContent).toBe("This is the header mate");
  // get the element to test the textcontent
});
