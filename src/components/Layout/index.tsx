import { Header } from '@/components/Header';
import { StyledLayout } from '@/theme/styles/layout/StyledLayout';
import { Typography } from '@mui/material';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout: FC = () => {
  return (
    <StyledLayout>
      <Header />
      <main className="mb-20">
        <Outlet />
      </main>
      Footer
      <Typography variant="h1">Responsive h3</Typography>
    </StyledLayout>
  );
};
