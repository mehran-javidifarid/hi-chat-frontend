import React from 'react';
import {Switch, BrowserRouter as Router} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import routes from "./routes"

const Routes: React.FC = () => (
  <Router>
    <Switch>
      {routes?.map<{ key: any }>((key, i) => {
          return <PrivateRoute
            header={key.header}
            footer={key.footer}
            key={i}
            path={key.path}
            reverse={key.reverse}
            exact={key.exact}
            Layout={key.Layout}
            filterButton={key.filterButton}
            Component={key.Component}
          />
        }
      )}
    </Switch>
  </Router>
);

export default Routes
