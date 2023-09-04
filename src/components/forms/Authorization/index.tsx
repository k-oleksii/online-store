import {
  StyledAuthorization,
  StyledAuthorizationContainer,
  StyledAuthorizationContent,
  StyledAuthorizationImg,
} from '@/theme/styles/components/StyledAuthorization';
import { Typography } from '@mui/material';
import { FC, useState } from 'react';
import { Switch } from '../elements/Switch';

import loginImg from '@/assets/login.jpg';
import loginImgWebp from '@/assets/login.webp';
import Image from 'react-image-webp';
import { SignIn } from './SignIn';

export const Authorization: FC = () => {
  const [open, setOpen] = useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <StyledAuthorization open={open} onClose={handleClose}>
      <StyledAuthorizationContainer>
        <StyledAuthorizationContent>
          <Typography variant="h3">Create an account</Typography>
          <Switch />
          <SignIn />
        </StyledAuthorizationContent>
        <StyledAuthorizationImg>
          <Image src={loginImg} webp={loginImgWebp} alt="Online" />
        </StyledAuthorizationImg>
      </StyledAuthorizationContainer>
    </StyledAuthorization>
  );
};
