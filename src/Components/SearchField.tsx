import React, { useState } from "react";
import { Button, InputAdornment, TextField } from "@material-ui/core";

type TSearchFieldProps = {
  isFetching: boolean;
  onSearchCharacter: (search: string) => void;
};

const SearchField = ({ isFetching, onSearchCharacter }: TSearchFieldProps) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmitButton = () => {
    onSearchCharacter(value);
  };

  return (
    <TextField
      label="Enter any number"
      variant="standard"
      type="number"
      fullWidth={true}
      onChange={handleChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Button
              color="primary"
              size="small"
              disabled={isFetching}
              onClick={handleSubmitButton}
            >
              Search
            </Button>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchField;
