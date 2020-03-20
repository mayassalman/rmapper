import React, { Fragment, useContext, useEffect } from "react";
import "../css/style.css";

import { FindPerson } from "./find-person";
import NavBar from "./navbar";
import { ViewRelationShip } from "./view-relationship";
import Home from "./Home";
import AddPerson from "./add-person";
import AddFriend from "./add-friend";
import { AppContext } from "../state";

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
      <ViewRelationShip method={"get"} />
      <AddFriend Id={3} />
      <AddPerson Id={4} />
    </Fragment>
  );
};

export default Dashboard;
