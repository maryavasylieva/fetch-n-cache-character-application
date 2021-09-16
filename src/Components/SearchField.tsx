import React, { useState } from "react";
import {
  InputAdornment,
  makeStyles,
  TextField,
  Theme,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) => ({
  inputField: {
    width: "300px",
  },
  button: {
    textTransform: "capitalize",
    fontSize: "20px",
  },
}));

type TSearchFieldProps = {
  isFetching: boolean;
  onSearchCharacter: (search: string) => void;
};

const SearchField = ({ isFetching, onSearchCharacter }: TSearchFieldProps) => {
  const [value, setValue] = useState("");
  const classes = useStyles();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearchCharacter(value);
  };

  return (
    <form method="GET" onSubmit={handleSubmit}>
    <TextField
      value={value}
      label="Enter any number"
      className={classes.inputField}
      variant="standard"
      type="number"
      onChange={handleChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Button
              color="primary"
              size="small"
              type="submit"
              disabled={isFetching}
              className={classes.button}
            >
              <i>Search</i>
            </Button>
          </InputAdornment>
        ),
      }}
    />
    </form>
  );
};

export default SearchField;
