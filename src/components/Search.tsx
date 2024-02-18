import { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { imageData } from "../data/imageData";

const Search = () => {
  type Image = {
    label: string;
    value: string;
    id: string;
  };

  const [searchValue, setSearchValue] = useState<Image | null>(null);

  const options = imageData.map((image) => {
    return { label: image.title, value: image.title, id: image.id };
  });

  return (
    <Autocomplete
      sx={{ width: 300 }}
      value={searchValue}
      options={options}
      getOptionKey={(option: Image) => option.id}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      onChange={(event, newValue) => {
        setSearchValue(newValue);
      }}
      renderInput={(params) => (
        <TextField {...params} label="Search for titles" variant="standard" />
      )}
    />
  );
};

export default Search;
