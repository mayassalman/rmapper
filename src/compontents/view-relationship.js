import React, { Fragment } from "react";
import { useContext } from "react";
import { PageProvider,  AppContext } from "../state";
import { RelationSearch } from "./search";
import { GraphVis } from "./graph-vis";

export const ViewRelationShip = () => {
  const { state: appState } = useContext(AppContext);
  const method="get"
  const url=appState.selectedPage===2?
        `https://rmapper.infostrategic.com/service/search/single?`
        :
        `https://rmapper.infostrategic.com/service/search?`
  return (
    <PageProvider>
      {[2,6].includes(appState.selectedPage)&& (
        <Fragment>
          <div className="row mt-0">
            <div className="col-lg-12 ">
              <RelationSearch />
            </div>
            <div className="col-lg-12 ">
              <GraphVis method={method} url={url} />
            </div>
          </div>
        </Fragment>
      )}
    </PageProvider>
  );
};
