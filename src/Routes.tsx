import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Anime from './Pages/Anime';
import Character from './Pages/Character';
import Fanart from './Pages/Fanart';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Layout from './Components/Layout/Layout';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            {' '}
            <Home />
          </Layout>
        }
      />
      <Route
        path="/anime"
        element={
          <Layout>
            {' '}
            <Anime />
          </Layout>
        }
      />
      <Route
        path="/character"
        element={
          <Layout>
            {' '}
            <Character />
          </Layout>
        }
      />
      <Route
        path="/fanart"
        element={
          <Layout>
            {' '}
            <Fanart />
          </Layout>
        }
      />
      <Route
        path="/login"
        element={
          <Layout>
            {' '}
            <Login />
          </Layout>
        }
      />
      <Route
        path="/signup"
        element={
          <Layout>
            {' '}
            <SignUp />
          </Layout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
