import ListSubheader from "@mui/material/ListSubheader";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Search from "../components/Search";
import ImageList from "../components/ImageList";

const Grid = () => {
  const theme = useTheme();
  const scaleDownLg = useMediaQuery(theme.breakpoints.down("lg"));

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
          height: scaleDownLg ? "100vh" : "75vh",
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
