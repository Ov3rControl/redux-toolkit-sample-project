import React, { Suspense } from 'react';
import './App.less';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import routes from './routes';
import Spinner from './sharedComponents/loadingIndicator/Spinner';
import { Provider } from 'react-redux';
import store from './store';
const App = () => {
  const routers = routes.map((route, index) => {
    return (
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        name={route.name}
        render={(props) => <route.component {...props} />}
      />
    );
  });
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <Switch>{routers}</Switch>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
