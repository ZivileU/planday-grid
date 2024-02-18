import { render, screen } from "@testing-library/react";
import ImageList from "./ImageList";
import useAppContext from "../contexts/appContext";

jest.mock("../contexts/appContext", () => jest.fn().mockReturnValue({}));

describe("ImageList component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("on the first page", () => {
    beforeEach(() => {
      useAppContext.mockReturnValue({ page: 2 });
    });

    test("renders 8 images", () => {
      render(<ImageList />);
      const images = screen.queryAllByTestId("image");
      expect(images).toHaveLength(8);
    });
  });

  describe("with no search results", () => {
    beforeEach(() => {
      useAppContext.mockReturnValue({
        searchValue: null,
        searchInputValue: "vafwed",
      });
    });

    test("does not render images", () => {
      render(<ImageList />);
      const images = screen.queryAllByTestId("image");
      expect(images).toHaveLength(0);
    });

    test("renders empty state text", () => {
      render(<ImageList />);
      const text = screen.getByText(/No results found/i);
      expect(text).toBeInTheDocument();
    });
  });

  describe("with search results", () => {
    beforeEach(() => {
      useAppContext.mockReturnValue({
        searchValue: { label: "Level up", value: "Level up", id: "666" },
        searchInputValue: "level",
      });
    });

    test("renders one image", () => {
      render(<ImageList />);
      const images = screen.queryAllByTestId("image");
      expect(images).toHaveLength(1);
    });
  });
});
