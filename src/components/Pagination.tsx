import React from "react";
import { default as MUIPagination } from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { imageData } from "../data/imageData";
import usePaginationContext from "../contexts/paginationContext";

const Pagination = () => {
  const { page, setPage } = usePaginationContext();

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const pagesTotal = Math.floor(imageData.length / 6); // we are showing 5 images per page

  return (
    <Stack spacing={2}>
      <MUIPagination count={pagesTotal} page={page} onChange={handleChange} />
    </Stack>
  );
};

export default Pagination;
