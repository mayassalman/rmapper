  import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import Home from "./compontents/Home";
import AddPerson from "./compontents/add-person";
import dashboard from "./compontents/dashboard";
import { AppProvider } from "./state";

export const App = () => {

  return (
    <AppProvider>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={dashboard} />
          {/* <Route exact path="/add" component={AddPerson} /> */}
          {/* <Route exact path="/" component={Home} /> */}
        </div>
      </BrowserRouter>
    </AppProvider>
  );
};

