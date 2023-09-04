import { StyledAuthorizationForm } from '@/theme/styles/components/StyledAuthorization';
import { Button, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Field } from '../../elements/Field';

export const SignIn = () => {
  const form = useForm({
    mode: 'onTouched',
  });

  const handleSendSubmit = data => {
    console.log(data);
  };

  return (
    <StyledAuthorizationForm onSubmit={form.handleSubmit(handleSendSubmit)}>
      <Field
        id="email"
        type="email"
        label="E-mail"
        icon="mail"
        placeholder="example@example.com"
        error={form.formState.errors.email}
        register={form.register('email')}
      />

      <Field
        id="password"
        type="password"
        label="Password"
        icon="pass"
        placeholder="***********"
        error={form.formState.errors.password}
        register={form.register('password')}
      />
      <Typography>
        Forgot your password? <Link to="#">Restore</Link>
      </Typography>

      <Button type="submit" variant="contained">
        Registration
      </Button>
    </StyledAuthorizationForm>
  );
};
