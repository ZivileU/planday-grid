import { imageData } from "../data/imageData";

type Image = {
  label: string;
  value: string;
  id: string;
};

export const fixPath = (path: string) => {
  return path.replaceAll("amp;", "").replace("&ixlib", "?&ixlib");
};

export const fixTitle = (title: string) => {
  return title.replaceAll("amp;", "");
};

export const imagesToShow = (page: number, searchValue: Image | null) => {
  const offset = 3 + 8 * (page - 1);
  let images;

  if (searchValue) {
    images = imageData.filter(
      (image) => fixTitle(image.title) === searchValue.value
    );
  } else {
    images = imageData.slice(offset - 3, offset + 5);
  }

  return images;
};
