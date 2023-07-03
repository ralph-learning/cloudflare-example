import { render, screen } from "@testing-library/react";
import Button from "./Button/Button";
import userEvent from "@testing-library/user-event";

jest.mock('./constant.js', () => ({
  test: 'test'
}));

describe("renders learn react link", () => {
  it("renders a Button", () => {
    render(<Button />);

    expect(screen.getByTestId('button')).toBeInTheDocument()
  });

  it("shows text inside of the button", () => {
    render(<Button>Test</Button>);

    expect(screen.getByTestId('button')).toHaveTextContent("Test")
  });

  it("shows another text inside of the button", () => {
    render(<Button>Test 2</Button>);

    expect(screen.getByTestId('button')).toHaveTextContent("Test 2")
  });

  it("calls onClick when clicked", () => {
    const onClickMock = jest.fn();
    render(<Button onClick={onClickMock}>Click me!</Button>);

    userEvent.click(screen.getByText("Click me!"));

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
