import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import useAppContext from "../contexts/appContext";
import { imageData } from "../data/imageData";

const Search = () => {
  const { searchValue, setSearchValue, searchInputValue, setSearchInputValue } =
    useAppContext();

  const options = imageData.map((image) => {
    return { label: image.title, value: image.title, id: image.id };
  });

  return (
    <Autocomplete
      sx={{ width: 300 }}
      value={searchValue}
      options={options}
      getOptionKey={(option) => option.id}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      onChange={(event, newValue) => {
        setSearchValue(newValue);
      }}
      inputValue={searchInputValue}
      onInputChange={(event, newInputValue) => {
        setSearchInputValue(newInputValue);
      }}
      renderInput={(params) => (
        <TextField {...params} label="Search for titles" variant="standard" />
      )}
    />
  );
};

export default Search;
