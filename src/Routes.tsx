import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Layout from './Components/Layout/Layout';
import SubPageWithCarusel from './Pages/SubPageWithCarusel';
import { PageType } from './types';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/anime"
        element={
          <Layout>
            <SubPageWithCarusel
              type={PageType.anime}
              content={'anime content'}
            />
          </Layout>
        }
      />
      <Route
        path="/character"
        element={
          <Layout>
            <SubPageWithCarusel
              type={PageType.character}
              content={'character content'}
            />
          </Layout>
        }
      />
      <Route
        path="/fanart"
        element={
          <Layout>
            <SubPageWithCarusel
              type={PageType.fanart}
              content={'fanart content'}
            />
          </Layout>
        }
      />
      <Route
        path="/login"
        element={
          <Layout>
            <Login />
          </Layout>
        }
      />
      <Route
        path="/signup"
        element={
          <Layout>
            <SignUp />
          </Layout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
