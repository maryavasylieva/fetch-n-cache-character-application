import { Button, InputAdornment, TextField } from "@material-ui/core";

const SearchField = () => {
  return (
    <TextField
      label="Enter any number"
      variant="standard"
      type="number"
      fullWidth={true}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Button color="primary" size="small">
              Search
            </Button>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchField;
