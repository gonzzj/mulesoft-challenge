import { Dispatch, SetStateAction, SyntheticEvent, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { validateDependencies } from '../../helpers/validations';
import { Network } from "../../types/dependency";

const PLACEHOLDER_TEXTAREA = "A DEPENDS B C\nB DEPENDS F G\nC DEPENDS G\nG DEPENDS X Y Z\nD DEPENDS Z";

interface InputDependenciesProps {
  setData: Dispatch<SetStateAction<Network | undefined>>
}

const InputDependencies = ({ setData }: InputDependenciesProps) => {
  const [value, setValue] = useState<string>('');
  const [helperText, setHelperText] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  const handleOnChangeInput = (e: SyntheticEvent) => {
    const { value } = e.target as HTMLInputElement;
    setValue(value);
  };

  const handleOnClickSubmit = () => {
    const { message, valid, graph } = validateDependencies(value);

    setError(!valid);
    setHelperText(message);

    valid && setData(graph);
  };

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
        rows={16}
        value={value}
        onChange={handleOnChangeInput}
        placeholder={PLACEHOLDER_TEXTAREA}
        InputLabelProps={{ shrink: true }}
        helperText={helperText}
        error={error}
        fullWidth
        focused
        multiline
      />
      <Button 
        variant="contained"
        onClick={handleOnClickSubmit}
        sx={{ mt: 1 }}
      >
        Submit dependencies
      </Button>
    </Box>
  );
};

export default InputDependencies;