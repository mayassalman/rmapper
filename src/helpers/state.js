import React, { useReducer, createContext } from "react";
let Appreducer = (state, action) => {
  switch (action.type) {
    case "SETSELECTEDPERSON":
      return { ...state, selectedPerson: action.newSelectedPerson };
    case "SETSELECTEDFRIEND":
      return { ...state, selectedFriend: action.newSelectedFriend };
    case "SETSELECTEDPAGE":
      return { ...state, selectedPage: action.newSelectedPage };
  
    default:
      return;
  }
};
const AppinitialState = {
  selectedPerson: {},
  selectedFriend: {},
  selectedPage: 0,
  navbarData: [
    { caption:`NAV_BAR.HOME`, Id: 0 },
    { caption: `NAV_BAR.ADD_PERSON`, Id: 4 },
    { caption: `NAV_BAR.SEARCH`, Id: 1 },
  ],
};
const AppContext = createContext(AppinitialState);
function AppProvider(props) {
  const [state, dispatch] = useReducer(Appreducer, AppinitialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
}

let PageReducer = (state, action) => {
  switch (action.type) {
    case "SETQUERYDATA":
      return { ...state, queryData: action.newQueryData };
    case "SETDATA":
      return { ...state, data: action.newData };
    case "SETSELECTEDRECORD":
      return { ...state, selectedRecord: action.newSelectedRecord };
      case "CLEAR":
        return  PageInitialState
    default:
      return;
  }
};
const PageInitialState = {
  queryData: "",
  data: [],
  selectedRecord: {}
};
const PageContext = createContext(PageInitialState);
function PageProvider(props) {
  const [state, dispatch] = useReducer(PageReducer, PageInitialState);
  return (
    <PageContext.Provider value={{ state, dispatch }}>
      {props.children}
    </PageContext.Provider>
  );
}

export { AppContext, AppProvider };
export { PageContext, PageProvider };
