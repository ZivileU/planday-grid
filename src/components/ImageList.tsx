import { default as MUIImageList } from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import useAppContext from "../contexts/appContext";
import { fixPath, fixTitle, imagesToShow } from "../utilities/utilities";

const ImageList = () => {
  const { page, searchValue, searchInputValue } = useAppContext();
  const theme = useTheme();
  const scaleDownLg = useMediaQuery(theme.breakpoints.down("lg"));

  const images = imagesToShow(page, searchValue);

  if (searchInputValue && !searchValue) {
    return <Typography variant="h3">No results found</Typography>;
  }

  return (
    <MUIImageList
      cols={scaleDownLg ? 1 : images.length === 1 ? 1 : 4}
      gap={4}
      sx={{ margin: 0 }}
    >
      {images.map((image) => (
        <ImageListItem key={image.id} data-testid="image">
          <img
            src={fixPath(image.imagePath)}
            alt={image.title}
            loading="lazy"
            style={{
              maxHeight: "75vh",
            }}
          />
          <ImageListItemBar
            title={fixTitle(image.title)}
            subtitle={fixTitle(image.description)}
          />
        </ImageListItem>
      ))}
    </MUIImageList>
  );
};

export default ImageList;
