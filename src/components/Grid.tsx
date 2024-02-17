import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import { imageData } from "../data/imageData";

const Grid = () => {
  const fixedPath = (path: string) => {
    return path.replaceAll("amp;", "").replace("&ixlib", "?&ixlib");
  };

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
        Playnday Grid
      </ListSubheader>
      <ImageList sx={{ width: 300 * 3 + 4 * 2, height: 450 }} cols={3}>
        {imageData.map((image) => (
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
    </>
  );
};

export default Grid;
