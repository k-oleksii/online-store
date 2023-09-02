import { getIcon } from '@/helpers/getIcon';
import {
  StyledNewsletter,
  StyledNewsletterButton,
} from '@/theme/styles/components/StyledNewsletter';
import { StyledContainer } from '@/theme/styles/layout/StyledWrappers';
import { EnumIcons } from '@/types';
import { InputAdornment, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

interface IData {
  email: string;
}
export const Newsletter = () => {
  const { register, handleSubmit } = useForm({
    mode: 'onTouched',
  });

  const handleSendSubmit = (data: IData) => {
    console.log(data);
  };

  return (
    <StyledNewsletter>
      <StyledContainer>
        <div className="content">
          <Typography variant="h4" component="span" className="title">
            Newsletter
          </Typography>
          <Typography component="p" className="subtitle">
            Receive updates, access to exclusive deals, and more. Please enter
            your email.
          </Typography>
          <form onSubmit={handleSubmit(handleSendSubmit as any)}>
            <TextField
              placeholder="What are you looking for?"
              {...register('email')}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {getIcon(EnumIcons.mail)}
                  </InputAdornment>
                ),
              }}
            />
            <StyledNewsletterButton type="submit">
              {getIcon(EnumIcons.send)}
            </StyledNewsletterButton>
          </form>
        </div>
      </StyledContainer>
    </StyledNewsletter>
  );
};
