import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import routesConfig from './RoutesConfig';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {routesConfig.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={
            route.layout ? <Layout>{route.element}</Layout> : route.element
          }
        />
      ))}
    </Routes>
  );
};

export default AppRoutes;
