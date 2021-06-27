import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";

import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

function App({ store }) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/gnomes/" component={HomePage} />
          <Route exact path="/gnomes/profile/:id" component={ProfilePage} />
          <Route path="*" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
