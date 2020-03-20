import React, { Fragment, useContext, useEffect, useState } from "react";
import { FindPerson } from "./find-person";
import { PageProvider, AppContext } from "../helpers/state";
import {  PageContext } from "../helpers/state";
import { addFriendRequest } from "../helpers/util";

const AddFriend = ({ Id }) => {
  const { state: appState, dispatch: appDispatch } = useContext(AppContext);
  const { state: pageState, dispatch: pageDispatch } = useContext(PageContext);

  

  return (
    <PageProvider>
      {appState.selectedPage === Id && (
        <Fragment>
          <FindPerson
            Id={Id}
            method={"post"}
            url={`https://rmapper.infostrategic.com/service/persons/search/`}
          />
        </Fragment>
      )}
    </PageProvider>
  );
};

export default AddFriend;
