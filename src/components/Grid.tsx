import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import Box from "@mui/material/Box";
import usePaginationContext from "../contexts/paginationContext";
import { imageData } from "../data/imageData";

const Grid = () => {
  const { page } = usePaginationContext();

  const fixedPath = (path: string) => {
    return path.replaceAll("amp;", "").replace("&ixlib", "?&ixlib");
  };

  const offset = 2 + 5 * (page - 1);

  return (
    <>
      <ListSubheader
        component="div"
        sx={{
          color: "text.primary",
          fontWeight: "bold",
          fontSize: 32,
        }}
      >
        Planday Grid
      </ListSubheader>
      <Box
        sx={{
          width: 360 * 3 + 4 * 2,
          height: "75vh",
          overflowY: "scroll",
          marginBottom: 2,
        }}
      >
        <ImageList cols={3} gap={4}>
          {imageData.slice(offset - 2, offset + 4).map((image) => (
            <ImageListItem key={image.imagePath}>
              <img
                src={fixedPath(image.imagePath)}
                alt={image.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={image.title}
                subtitle={image.description}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </>
  );
};

export default Grid;
