import ListSubheader from "@mui/material/ListSubheader";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Search from "../components/Search";
import ImageList from "../components/ImageList";

const Grid = () => {
  return (
    <Box
      sx={{
        width: "90%",
        maxWidth: 1292,
      }}
    >
      <Stack
        direction="row"
        sx={{
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
    </Box>
  );
};

export default Grid;
