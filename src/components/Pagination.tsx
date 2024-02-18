import React from "react";
import { default as MUIPagination } from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { imageData } from "../data/imageData";
import usePaginationContext from "../contexts/appContext";

const Pagination = () => {
  const { page, setPage } = usePaginationContext();

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const pagesTotal = Math.ceil(imageData.length / 8); // we are showing 8 images per page

  return (
    <Stack spacing={2}>
      <MUIPagination count={pagesTotal} page={page} onChange={handleChange} />
    </Stack>
  );
};

export default Pagination;
