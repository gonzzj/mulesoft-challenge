import TextField from "@mui/material/TextField";

const InputDependencies = () => {

  return (
    <TextField
      id="input-dependencies"
      label="Dependencies"
      multiline
      rows={16}
      placeholder={"A DEPENDS B C\nB DEPENDS F G\nC DEPENDS G\nG DEPENDS X Y Z\nD DEPENDS Z"}
      InputLabelProps={{ shrink: true }}
      fullWidth
    />
  );
};

export default InputDependencies;