import { StyledRadioSwitch } from '@/theme/styles/ui/RadioSwitch';
import { FormControl, FormControlLabel, Radio } from '@mui/material';
import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
const types = ['Sign In', 'Sign Up'];
export const Switch: FC = () => {
  const form = useForm({
    mode: 'onTouched',
  });
  return (
    <FormControl fullWidth>
      <Controller
        render={({ field }) => {
          return (
            <StyledRadioSwitch
              defaultValue={types[0]}
              onChange={e => field.onChange(e.target.value)}
            >
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
          );
        }}
        name="type"
        control={form.control}
      />
    </FormControl>
  );
};
