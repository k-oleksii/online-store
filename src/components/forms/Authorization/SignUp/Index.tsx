import { getIcon } from '@/helpers/getIcon';
import { StyledAuthorizationForm } from '@/theme/styles/components/StyledAuthorization';
import { StyledDivider } from '@/theme/styles/ui/StyledDivider';
import { StyledGoogleBtn } from '@/theme/styles/ui/StyledGoogleLink';
import { EnumIcons } from '@/types';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Field } from '../../elements/Field';

interface ISignIn {
  email: string;
  password: string;
}

export const SignUp = () => {
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
        id="name"
        type="text"
        label="User Name"
        icon="user"
        placeholder="Name"
        error={form.formState.errors.name}
        register={form.register('name')}
      />

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
        label="Create a Password"
        icon="pass"
        placeholder="***********"
        error={form.formState.errors.password}
        register={form.register('password')}
      />
      <Field
        id="confirmPassword"
        type="password"
        label="Confirm Your Password"
        icon="pass"
        placeholder="***********"
        error={form.formState.errors.confirm}
        register={form.register('confirm')}
      />

      <StyledDivider>
        <span>or</span>
      </StyledDivider>
      <StyledGoogleBtn>
        {getIcon(EnumIcons.google)}
        Sign Up with Google
      </StyledGoogleBtn>
      <Button type="submit" variant="contained">
        Registration
      </Button>
    </StyledAuthorizationForm>
  );
};
