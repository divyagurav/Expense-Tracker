import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

Test("renders Hello world as a text", () => {
  //Arrange
  render(<Greeting />);

  //act

  //assert
  const helloWorldElement = screen.getByText("Hello World!");

  expect(helloWorldElement).toBeInTheDocument();
});
