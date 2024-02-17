import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { default as MUIPagination } from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { imageData } from "../data/imageData";

const Pagination = () => {
  const [page, setPage] = useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const pagesTotal = Math.floor(imageData.length / 3);

  return (
    <Stack spacing={2}>
      <Typography>Page: {page}</Typography>
      <MUIPagination count={pagesTotal} page={page} onChange={handleChange} />
    </Stack>
  );
};

export default Pagination;
