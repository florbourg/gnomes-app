import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "90%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function NativeSelects({
  options,
  setState,
  state,
  title,
  setFriendSelected,
}) {
  const classes = useStyles();

  const handleChange = (event) => {
    setState(event.target.value);
    setFriendSelected(undefined);
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel shrink htmlFor="name-native-error">
        {title}
      </InputLabel>
      <NativeSelect
        value={state}
        onChange={handleChange}
        name="name"
        color="primary"
        inputProps={{
          id: "name-native-error",
        }}
      >
        <option value="all">All</option>
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
}

NativeSelects.propTypes = {
  setFriendSelected: PropTypes.func,
  state: PropTypes.string.isRequired,
  setstate: PropTypes.func,
  options: PropTypes.array.isRequired,
  title: PropTypes.string,
};

NativeSelects.defaultProps = {
  setFriendSelected: () => {},
  state: "",
  setState: () => {},
  options: [],
  title: "",
};
