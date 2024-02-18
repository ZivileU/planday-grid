import { default as MUIImageList } from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Typography from "@mui/material/Typography";
import useAppContext from "../contexts/appContext";
import { imageData } from "../data/imageData";

const ImageList = () => {
  const { page, searchValue, searchInputValue } = useAppContext();

  const fixedPath = (path: string) => {
    return path.replaceAll("amp;", "").replace("&ixlib", "?&ixlib");
  };

  const offset = 3 + 8 * (page - 1);

  const imagesToShow = () => {
    let images;

    if (searchValue) {
      images = imageData.filter((image) => image.title === searchValue.value);
    } else {
      images = imageData.slice(offset - 3, offset + 5);
    }

    return images;
  };

  const images = imagesToShow();

  if (searchInputValue && !searchValue) {
    return <Typography variant="h3">No results found</Typography>;
  }

  return (
    <MUIImageList cols={images.length === 1 ? 1 : 4} gap={4} sx={{ margin: 0 }}>
      {images.map((image) => (
        <ImageListItem key={image.id} sx={{}}>
          <img
            src={fixedPath(image.imagePath)}
            alt={image.title}
            loading="lazy"
            style={{
              maxHeight: "75vh",
              objectFit: images.length === 1 ? "contain" : "cover",
            }}
          />
          {images.length > 1 && (
            <ImageListItemBar
              title={image.title}
              subtitle={image.description}
            />
          )}
        </ImageListItem>
      ))}
    </MUIImageList>
  );
};

export default ImageList;
