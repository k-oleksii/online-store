import { Header } from '@/components/Header';
import { StyledLayout } from '@/theme/styles/layout/StyledLayout';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout: FC = () => {
  return (
    <StyledLayout>
      <Header />
      <main className='mb-20'>
        <Outlet />
      </main>
      Footer
    </StyledLayout>
  );
};
