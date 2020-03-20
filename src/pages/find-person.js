import React, { Fragment } from "react";
import { useContext } from "react";
import { PageProvider, AppContext } from "../helpers/state";
import { DefaultSearch } from "../compontents/search";
import PersonsList from "../compontents/persons-list";
import { Profile } from "../compontents/profile";

export const FindPerson = ({ method, url, Id}) => {
  const { state: appState} = useContext(AppContext);
  return (
    <PageProvider>
      {appState.selectedPage===Id && (
        <Fragment>
          <div className="row mt-0">
            <div className="col-lg-12 ">
              <DefaultSearch />
            </div>
            <div className="col-lg-12 ">
              <PersonsList method={method} url={url} />
            </div>
            <div className="col-lg-12 ">
              <Profile Id={Id}/>
            </div>
      <div style={{height:"50px"}}></div>

          </div>
        </Fragment>
      )}
    </PageProvider>
  );
};
