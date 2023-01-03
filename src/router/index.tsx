import { Suspense, useContext } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import FallbackComponent from 'src/components/fallbackComponent';
import {
  protectedRoutes,
  publicRoutes,
  restrictedRoutes,
} from 'src/config/router/routes';
import { AuthContext } from 'src/context';

import ProtectedRouter from './ProtectedRouter';
import RestrictedRouter from './RestrictedRouter';
import { renderRoutesList } from './utils';

function AppRouter() {
  const {
    authState: { isAuthenticated },
  } = useContext(AuthContext);
  return (
    <BrowserRouter basename={process.env.APP_BASENAME_PATH}>
      <Suspense fallback={<FallbackComponent />}>
        <Switch>
          {/**
           * public route
           */}
          {renderRoutesList(publicRoutes)}
          {/**
           * control route /
           */}
          <Route
            path="/"
            render={() => {
              if (isAuthenticated) {
                return <ProtectedRouter />;
              }
              return <RestrictedRouter />;
            }}
          />
          {/**
           * no match route
           */}
          <Route
            path="*"
            render={({ location }) => (
              <Redirect
                to={{
                  pathname: isAuthenticated
                    ? protectedRoutes.dashboard.path
                    : restrictedRoutes.login.path,
                  state: { from: location },
                }}
              />
            )}
          />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default AppRouter;
