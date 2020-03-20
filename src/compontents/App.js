  import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "../css/App.css";

// import Home from "./pages/Home";
// import AddPerson from "./pages/add-person";
import dashboard from "./dashboard";
import { AppProvider } from "../helpers/state";

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

