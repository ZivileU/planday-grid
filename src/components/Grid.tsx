import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import useAppContext from "../contexts/appContext";
import Search from "../components/Search";
import { imageData } from "../data/imageData";

const Grid = () => {
  const { page } = useAppContext();

  const fixedPath = (path: string) => {
    return path.replaceAll("amp;", "").replace("&ixlib", "?&ixlib");
  };

  const offset = 3 + 8 * (page - 1);

  return (
    <>
      <Stack
        direction="row"
        sx={{
          width: 320 * 4 + 4 * 3,
          marginBottom: 3,
          justifyContent: "space-between",
        }}
      >
        <ListSubheader
          component="div"
          sx={{
            color: "text.primary",
            fontWeight: "bold",
            paddingLeft: 0,
            fontSize: 32,
          }}
        >
          Planday Grid
        </ListSubheader>
        <Search />
      </Stack>
      <Box
        sx={{
          width: 320 * 4 + 4 * 3,
          height: "75vh",
          overflowY: "scroll",
          marginBottom: 2,
        }}
      >
        <ImageList cols={4} gap={4} sx={{ margin: 0 }}>
          {imageData.slice(offset - 3, offset + 5).map((image) => (
            <ImageListItem key={image.id}>
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
