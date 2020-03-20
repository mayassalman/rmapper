import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { PageContext, AppContext } from "../state";

export const addFriendRequest = async (pid, pid2) => {
  await axios
    .post(`https://rmapper.infostrategic.com/service/persons/${pid}/friends`, [
      pid2
    ])
    .then(res => alert("Friend Successfully Added"));
};
export const searchPersons = async name => {
  const personToSearch = { name: `${name}`, surname: "" };
  await axios.post(
    `https://rmapper.infostrategic.com/service/persons/search/`,
    personToSearch
  );
};
export const EmptyFetchingResult = () => (
  <div>No results match your search criteria</div>
);
export const Error = () => (
  <div>Sorry..Something went wrong,please try again ...</div>
);
export const Loading = () => (
  <div className="flone-preloader">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
);
export const Searching = () => (
  <div className="flone-preloader">
    <span></span>
    <span></span>
  </div>
);

export const useDataApi = (method, url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const { state: pageState, dispatch: pageDispatch } = useContext(PageContext);
  const { state: appState, dispatch: appDispatch } = useContext(AppContext);
  useEffect(() => {
    console.log('page changed',appState.selectedPage)
    pageDispatch({
      type: `CLEAR`
    });
  },
    [appState.selectedPage]
    )
    
  useEffect(() => {
    if (appState.selectedPage === 1)
      appDispatch({
        type: `SETSELECTEDPERSON`,
        newSelectedPerson: {}
      });
    if (appState.selectedPage === 3)
      appDispatch({
        type: `SETSELECTEDFRIEND`,
        SETSELECTEDFRIEND: {}
      });

    const fetchData = async () => {
      const config =
        method === "post"
          ? {
              method: `post`,
              url: url,
              data: {
                name: `${pageState.queryData}`,
                surname: ``
              }
            }
          : {
              method: `get`,
              url: url + pageState.queryData
            };
      setIsError(false);
      setIsLoading(true);
      setIsEmpty(false);
      pageDispatch({
        type: `CLEAR`
      });

      try {
        const result = await axios(config);
        pageDispatch({
          type: `SETDATA`,
          newData: result.data
        });

        setIsEmpty(result.data.length > 0 ? false : true);
        isEmpty && 
        pageDispatch({
          type: `CLEAR`
        });
      } catch (error) {
        setIsError(true);
        pageDispatch({
          type: `CLEAR`
        });
      }
      setIsLoading(false);
    };
    if (pageState.queryData.trim() !== ``) fetchData();
  }, [pageState.queryData, url]);
 
  return [{ isLoading, isError, isEmpty }];
};
