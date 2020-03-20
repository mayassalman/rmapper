import React, { Fragment, useContext, useEffect } from "react";
import "../css/style.css";

import { FindPerson } from "../pages/find-person";
import NavBar from "./navbar";
import { ViewRelationShip } from "../pages/view-relationship";
import Home from "../pages/Home";
import AddPerson from "../pages/add-person";
import AddFriend from "../pages/add-friend";
import { AppContext } from "../helpers/state";

const Dashboard = () => {
  const { state: appState } = useContext(AppContext);

  return (
    <Fragment>
      <NavBar />
      <Home Id={0} />
      <FindPerson
        Id={1}
        method={"post"}
        url={`https://rmapper.infostrategic.com/service/persons/search/`}
      />
      <ViewRelationShip  />
      <AddFriend Id={3} />
      <AddPerson Id={4} />
    </Fragment>
  );
};

export default Dashboard;
