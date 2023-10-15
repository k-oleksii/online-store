import { getIcon } from '@/helpers/getIcon';
import {
  StyledAuthorizationForm,
  StyledForgotPassText,
} from '@/theme/styles/components/StyledAuthorization';
import { StyledDivider } from '@/theme/styles/ui/StyledDivider';
import { StyledGoogleBtn } from '@/theme/styles/ui/StyledGoogleLink';
import { EnumIcons } from '@/types';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Field } from '../../elements/Field';

interface ISignIn {
  email: string;
  password: string;
}

export const SignIn = () => {
  const form = useForm({
    mode: 'onTouched',
  });

  const handleSendSubmit = (data: ISignIn) => {
    console.log(data);
  };

  return (
    <StyledAuthorizationForm
      onSubmit={form.handleSubmit(handleSendSubmit as any)}
    >
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
      <StyledForgotPassText variant="body2">
        Forgot your password? <Link to="#">Restore</Link>
      </StyledForgotPassText>
      <StyledDivider>
        <span>or</span>
      </StyledDivider>
      <StyledGoogleBtn>
        {getIcon(EnumIcons.google)}
        Log In with Google
      </StyledGoogleBtn>
      <Button type="submit" variant="contained">
        Continue
      </Button>
    </StyledAuthorizationForm>
  );
};
