import { Routes, Route } from 'react-router-dom';

import Page404 from 'lib/pages/404';
import { routes, privateRoutes } from './routes';
import RequireAuth from 'lib/components/auth/RequireAuth';
import Layout from 'lib/layout';

const Routings = () => {
  return (
    <Routes>
      {routes.map((routeProps) => (
        <Route
          {...routeProps}
          key={routeProps.path}
          element={<Layout>{routeProps.element}</Layout>}
        />
      ))}
      {privateRoutes.map(({ element, ...privateRouteProps }) => (
        <Route
          element={
            <RequireAuth
              redirectTo={`/login?redirectTo=${privateRouteProps.path}`}
            >
              {element}
            </RequireAuth>
          }
          {...privateRouteProps}
          key={`privateRoute-${privateRouteProps.path}`}
        />
      ))}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default Routings;
