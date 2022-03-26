import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const InputDependencies = () => {

  return (
    <Box 
      sx={{ 
        display: 'flex',
        alignItems: 'flex-end',
        flexDirection: 'column',
        height: 456,
        justifyContent: 'space-between'
      }}
    >
      <TextField
        id="input-dependencies"
        label="Commands"
        multiline
        rows={16}
        placeholder={"A DEPENDS B C\nB DEPENDS F G\nC DEPENDS G\nG DEPENDS X Y Z\nD DEPENDS Z"}
        InputLabelProps={{ shrink: true }}
        fullWidth
      />
      <Button 
        variant="contained"
      >
        Submit dependencies
      </Button>
    </Box>
  );
};

export default InputDependencies;