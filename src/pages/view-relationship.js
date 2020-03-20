import React, { Fragment } from "react";
import { useContext } from "react";
import { PageProvider,  AppContext } from "../helpers/state";
import { RelationSearch } from "../compontents/search";
import { GraphVis } from "../compontents/graph-vis";
import { useTranslation } from "react-i18next";

export const ViewRelationShip = () => {
  const { t } = useTranslation();

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
            <div className="col-lg-12">
        <div className="col-lg-12">
          <h4 className="add_title ">{t("RELATIONSHIP.VIEW_RELATIONSHIP")}</h4>
        </div>
      </div>
            <div className="col-lg-2 ">
              <RelationSearch />
            </div>
            <div className="col-lg-10 ">
              <GraphVis method={method} url={url} />
            </div>
          </div>
        </Fragment>
      )}
    </PageProvider>
  );
};
