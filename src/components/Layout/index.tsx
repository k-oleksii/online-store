import { Header } from '@/components/Header';
import { StyledLayout } from '@/theme/styles/layout/StyledLayout';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer';
import { Newsletter } from '../Newsletter';

export const Layout: FC = () => {
  return (
    <StyledLayout>
      <Header />
      <main className="flex flex-col gap-y-14 mb-14">
        <Outlet />
      </main>
      <Newsletter />
      <Footer />
    </StyledLayout>
  );
};
