import React, { Fragment, useState, useContext, useEffect } from "react";
import Graph from "react-graph-vis";
import { useDataApi, Error, Loading, EmptyFetchingResult } from "./util.js";

import { PageContext, AppContext } from "../state";
import { useTranslation } from "react-i18next";

export const GraphVis = ({ method, url }) => {
  const [graph, setGraph] = useState({ nodes: [], edges: [] });
  const { state: pageState ,dispatch:pageDispatch} = useContext(PageContext);
  const { state: appState } = useContext(AppContext);

  const [{ isLoading, isError, isEmpty }] = useDataApi(method, url);
  
  useEffect(() => {
    let data = pageState.data;

    var nodes = [];
    var edges = [];
    if (data.length) {
      for (var i = 0; i < data.length; i++) {
        nodes.push({
          id: data[i].pid,
          label: data[i].name + " " + data[i].surname,
          title: data[i].name + " " + data[i].surname,
          color: i === 0 ? "#E933FF" : "#33FFA2"
        });
        for (var j = 0; j < data[i].relation.length; j++) {
          edges.push({
            from: data[i].pid,
            to: data[i].relation[j].pid,
            title: data[i].relation[j].types.join("\n"),
            color: data[i].relation[j].types.length > 1 ? "#3361FF" : "#33FFA2"
          });
        }
      }
      setGraph({ nodes, edges });
      
    pageDispatch({
      type: `SETDATA`,
      newData:[]
    })
  }

  }, [pageState.data]);

  const options = {
    layout: {
      // hierarchical: true
    },
    edges: {
      color: "#000000",
      arrows: { to: { enabled: false }, from: { enabled: false } }
    },
    height: "500px"
  };

  const events = {
    select: function(event) {
      var { nodes, edges } = event;
      console.log(event);
    }
  };

  return (
    <Fragment>
      {/* {appState.selectedPage+`:`+url+pageState.queryData} */}

      <div
        style={{
          margin: "20px",
          width: "80%",
          height: "500px",
          overflowY: "scroll",
          lineHeight: 3,
          overflowX: "hidden"
        }}
      >
        <div className="row p-3">
          {
             appState.selectedFriend.name && (isEmpty ?
            <RelationshipNotFound/>:
            <FindRelationship/>)
          }

</div>
        <div className="row p-3">
          {isError && <Error />}
          {isLoading ? (
            <Loading />
          ) : (
            <Graph
              graph={graph}
              options={options}
              events={events}
              getNetwork={network => {
                //  if you want access to vis.js network api you can set the state in a parent component using this property
              }}
            />
          )}
        </div>
      </div>
      <div style={{ height: "50px" }}></div>
    </Fragment>
  );
};
const RelationshipNotFound = () => {
  const { t } = useTranslation();
  const { state: appState } = useContext(AppContext);

  return (
    <div className="col-lg-12">
      <h5 className="add_title ">
        {t("RELATIONSHIP.RELATIONSHIP_NOT_FOUND", {
          first: `${appState.selectedPerson.name} ${appState.selectedPerson.surname}`,
          second: `${appState.selectedFriend.name} ${appState.selectedFriend.surname}`
        })}
      </h5>
    </div>
  );
};
const FindRelationship = () => {
  const { t } = useTranslation();
  const { state: appState } = useContext(AppContext);

  return (
    <div className="col-lg-12">
      <h5 className="add_title ">
        {t("RELATIONSHIP.FIND_RELATIONSHIP", {
          first: `${appState.selectedPerson.name} ${appState.selectedPerson.surname}`,
          second: `${appState.selectedFriend.name} ${appState.selectedFriend.surname}`
        })}
      </h5>
    </div>
  );
};
