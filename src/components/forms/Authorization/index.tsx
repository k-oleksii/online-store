import {
  StyledAuthorization,
  StyledAuthorizationContainer,
  StyledAuthorizationContent,
  StyledAuthorizationImg,
  StyledAuthorizationTitle,
} from '@/theme/styles/components/StyledAuthorization';
import { FC, useState } from 'react';
import { Switch } from '../elements/Switch';

import loginImg from '@/assets/login.jpg';
import loginImgWebp from '@/assets/login.webp';
import { uiActions } from '@/lib/redux/actions';
import { getAuthOpen } from '@/lib/redux/selectors';
import Image from 'react-image-webp';
import { useDispatch, useSelector } from 'react-redux';
import { SignIn } from './SignIn';
import { SignUp } from './SignUp/Index';
import { selectAuthOpen } from '@/lib/otherRedux/selectors';
import { setSearch } from '@/lib/otherRedux/slice/header';

export const Authorization: FC = () => {
  const dispatch = useDispatch();
  const isAuthOpen = useSelector(selectAuthOpen);

  const [typeForm, setTypeForm] = useState('Sign In');

  const handleClose = () => {
    dispatch(setSearch(!isAuthOpen));
  };

  const handleChange = (value: string) => {
    setTypeForm(value);
  };

  return (
    <StyledAuthorization open={isAuthOpen} onClose={handleClose}>
      <StyledAuthorizationContainer>
        <StyledAuthorizationContent>
          <StyledAuthorizationTitle variant="h3" className="title">
            {typeForm === 'Sign In' ? 'Welcome Back' : 'Create an account'}
          </StyledAuthorizationTitle>
          <Switch onChange={handleChange} />
          {typeForm === 'Sign In' ? <SignIn /> : <SignUp />}
        </StyledAuthorizationContent>
        <StyledAuthorizationImg>
          <Image src={loginImg} webp={loginImgWebp} alt="Online" />
        </StyledAuthorizationImg>
      </StyledAuthorizationContainer>
    </StyledAuthorization>
  );
};
