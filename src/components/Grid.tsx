import ListSubheader from "@mui/material/ListSubheader";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Search from "../components/Search";
import ImageList from "../components/ImageList";

const Grid = () => {
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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ImageList />
      </Box>
    </>
  );
};

export default Grid;
