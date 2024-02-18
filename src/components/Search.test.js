import { render, screen } from "@testing-library/react";
import Search from "./Search";
import useAppContext from "../contexts/appContext";

jest.mock("../contexts/appContext", () => jest.fn().mockReturnValue({}));

describe("Search component initial state", () => {
  beforeEach(() => {
    useAppContext.mockReturnValue({
      searchValue: null,
      searchInputValue: "",
      setSearchInputValue: jest.fn(),
    });
  });

  test("renders placeholder text", () => {
    render(<Search />);
    const text = screen.getByText(/Search for titles/i);
    expect(text).toBeInTheDocument();
  });
});
