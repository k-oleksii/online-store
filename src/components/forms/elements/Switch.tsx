import { StyledRadioSwitch } from '@/theme/styles/ui/StyledRadioSwitch';
import { FormControl, FormControlLabel, Radio } from '@mui/material';
import { ChangeEvent } from 'react';
const types = ['Sign In', 'Sign Up'];

export const Switch = ({ onChange }: { onChange: (value: string) => void }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (onChange) {
      onChange(value);
    }
  };

  return (
    <FormControl fullWidth>
      <StyledRadioSwitch defaultValue={types[0]} onChange={handleChange}>
        {types &&
          types.map(type => {
            return (
              <FormControlLabel
                key={type}
                value={type}
                control={<Radio />}
                label={type}
              />
            );
          })}
      </StyledRadioSwitch>
    </FormControl>
  );
};
