import React, { Fragment, useEffect, useState } from "react";
import { useContext } from "react";
import { PageContext, AppContext } from "../state";
import { useDataApi, Error, Loading, EmptyFetchingResult } from "./util.js";

const PersonsList = ({ method, url }) => {
  const { state:pageState } = useContext(PageContext);
  const [personsList, setPersonListProfile] = useState([]);
  const [{ isLoading, isError,  isEmpty }] = useDataApi(method, url);

  useEffect(() => {
    let data=pageState.data
    setPersonListProfile(
      <Fragment>
        <div className="row mt-2">
          <div className="col-lg-12 ">
            {Array.isArray(data) && data.length > 0 ? (
              <Fragment>
                <ListView data={data} />
              </Fragment>
            ) : (
              <div className="row m-2">
                {isError && <Error />}
                {isLoading && <Loading />}
                {isEmpty && <EmptyFetchingResult />}
              </div>
            )}
          </div>
        </div>
      </Fragment>
    );
  }, [pageState.data,isLoading, isError,  isEmpty]);

  return pageState.data ? personsList : <div>....</div>;
};
export default PersonsList;

const PersonView = ({ person }) => {
  const { state: pageState, dispatch: pageDispatch } = useContext(PageContext);
  const { state: appState, dispatch: appDispatch } = useContext(AppContext);

  return (
    <div className="btn-bg bg-3 ml-3">
      <div className="btnn btn-3">
        <button
          id={person.pid}
          style={{
            fontSize: "0.9em",
            padding: "5px",
            margin: "5px",
            width: "200px",
            backgroundColor:
              pageState.selectedRecord &&
              pageState.selectedRecord.pid === person.pid
                ? "#1a0c6e"
                : "#97bacf"
          }}
          onClick={e => {
            if (appState.selectedPage === 1)
              {appDispatch({
                type: `SETSELECTEDPERSON`,
                newSelectedPerson: person
              });
              pageDispatch({
                type: `SETSELECTEDRECORD`,
                newSelectedRecord: person
              });
            }

            if (appState.selectedPage === 3 )
              {appDispatch({
                type: `SETSELECTEDFRIEND`,
                newSelectedFriend: person
              });
            pageDispatch({
              type: `SETSELECTEDRECORD`,
              newSelectedRecord: person
            });}
          }}
        >
          {person.name} {person.surname}
        </button>
      </div>{" "}
    </div>
  );
};
const ListView = ({ data }) => {
  return Array.isArray(data) && data.length ? (
    <div
      style={{
        width: "100%",
        height: "190px",
        overflowY: "scroll",
        lineHeight: 3,
        overflowX: "hidden",
        marginRight:"10px",
        marginBottom: "10px"
      }}
    >
      <div className="row p-3">
        {data.map(person => (
          <div>
            <PersonView person={person} />
          </div>
        ))}
      </div>
    </div>
  ) : null;
};
