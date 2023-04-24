import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import Navigation from '../Navigation/Navigation';
import { Loader } from '../Loader/Loader';

import { Header, Main } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};
