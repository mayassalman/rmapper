import React, { useState } from "react";
import { useContext } from "react";
import { PageContext, AppContext } from "../state";
import { useTranslation } from "react-i18next";

const DefaultSearch = () => {
  const { t } = useTranslation();

  const { dispatch: pageDispatch } = useContext(PageContext);
  const { state: appState, dispatch: appDispatch } = useContext(AppContext);
  const [searchText, setSearchText] = useState("");

  // useEffect(() => {
  // setSearchText(pageState.queryData);
  // }, [t]);
  return (
    <div className="col-lg-10 mt-1 search__container">
      <div className="row ">
        <div className="col-lg-3">
          <div className="search_label">{t("SEARCH.SEARCH_FOR_PERSON")}</div>
        </div>
        <div className="col-lg-3">
          <input
            className="search__input"
            type="text"
            placeholder={t("SEARCH.SEARCH")}
            value={searchText}
            onChange={event => {
              setSearchText(event.target.value);
            }}
          />
        </div>
        <div className="col-lg-6  pl-3 pt-2">
          <div className="col-lg-4 col-md-4 col-sm-4">
            <div className="btn-bg bg-3">
              <div className="btnn btn-3">
                <button
                  onClick={() => {
                    pageDispatch({
                      type: `SETQUERYDATA`,
                      newQueryData: searchText
                    });
                    pageDispatch({
                      type: `SETSELECTEDRECORD`,
                      newSelectedRecord: {}
                    });
                    if (appState.selectedPage === 1) {
                      appDispatch({
                        type: `SETSELECTEDPERSON`,
                        newSelectedPerson: {}
                      });
                    }
                    if (appState.selectedPage === 3) {
                      appDispatch({
                        type: `SETSELECTEDFRIEND`,
                        newSelectedFriend: {}
                      });
                    }
                  }}
                >
                  {t("SEARCH.SEARCH")}
                </button>
              </div>{" "}
            </div>{" "}
          </div>
        </div>{" "}
      </div>
    </div>
  );
};
const RelationSearch = () => {
  const { t } = useTranslation();

  const { state: appState } = useContext(AppContext);
  const [depth, setDepth] = useState(1);
  const { dispatch: pageDispatch } = useContext(PageContext);
  const [formData, setFormData] = useState({
    direct: false,
    hometown: false,
    city: false,
    religion: false,
    company: false,
    job: false,
    school: false,
    university: false,
    relation: false
  });
  const updateFormData = event => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.checked
    });
  };

  return (
    <div className="row m-2">
      <div className="col-lg-12">
        <h4 className="add_title ">
          {t("RELATIONSHIP.VIEW_RELATIONSHIP")}
          {/* عرض   <span> العلاقات </span>
           بين 
          <span> {appState.selectedPerson && appState.selectedPerson.name} </span>
           و 
          <span> {(appState.selectedFriend && appState.selectedFriend.name) || `الآخرين`} </span>
        
        */}
        </h4>
      </div>
      <div className="col-lg-2 pr-6  m-0">
        {/* {pageState.queryData} */}
        <div className="col-lg-12 checkbox-group mt-3 pt-2 pl-10">
          <input
            type="checkbox"
            id="relation"
            onClick={e => {
              updateFormData(e);
            }}
          />
          <label htmlFor="relation">{t("RELATIONSHIP.LEVEL_RELATION")}</label>
        </div>
        <div className="col-lg-12 p-0 select m-0">
          <select
            name="depth"
            id="depth"
            onChange={e => {
              setDepth(e.target.value);
            }}
          >
            <option value="1">{t("RELATIONSHIP.LEVEL_ONE")}</option>
            <option value="2">{t("RELATIONSHIP.LEVEL_TWO")}</option>
            <option value="3">{t("RELATIONSHIP.LEVEL_THREE")}</option>
          </select>
        </div>
      </div>
      <div className="col-lg-6  checkbox-group mt-3 pt-2 pl-10">
        <span>
          <input type="checkbox" id="direct" onClick={e => updateFormData(e)} />
          <label htmlFor="direct"> {t("RELATIONSHIP.DIRECT")}</label>
        </span>
        <span>
          <input
            type="checkbox"
            id="hometown"
            onClick={e => updateFormData(e)}
          />
          <label htmlFor="hometown"> {t("RELATIONSHIP.HOMETOWN")}</label>
        </span>
        <span>
          <input type="checkbox" id="city" onClick={e => updateFormData(e)} />
          <label htmlFor="city"> {t("RELATIONSHIP.CITY")}</label>
        </span>
        <span>
          <input type="checkbox" id="job" onClick={e => updateFormData(e)} />
          <label htmlFor="job"> {t("RELATIONSHIP.JOB")}</label>
        </span>
        <span>
          <input type="checkbox" id="school" onClick={e => updateFormData(e)} />
          <label htmlFor="school"> {t("RELATIONSHIP.SCHOOL")}</label>
        </span>
        <span>
          <input
            type="checkbox"
            id="religion"
            onClick={e => updateFormData(e)}
          />
          <label htmlFor="religion"> {t("RELATIONSHIP.RELIGION")}</label>
        </span>
        <span>
          <input
            type="checkbox"
            id="company"
            onClick={e => updateFormData(e)}
          />
          <label htmlFor="company">{t("RELATIONSHIP.COMPANY")}</label>
        </span>
        <span>
          <input
            type="checkbox"
            id="university"
            onClick={e => updateFormData(e)}
          />
         <label htmlFor="university"> {t("RELATIONSHIP.UNIVERSITY")}</label>
        </span>
      </div>

      <div className="col-lg-2 col-md-4 col-sm-4 mt-3">
        <div className="btn-bg bg-3">
          <div className="btnn btn-3">
            <button
              onClick={() => {
                let types = [];
                if (formData.direct) types.push(0);
                if (formData.hometown) types.push(1);
                if (formData.city) types.push(2);
                if (formData.religion) types.push(3);
                if (formData.company) types.push(4);
                if (formData.job) types.push(5);
                if (formData.school) types.push(6);
                if (formData.university) types.push(7);

                let pid2 =
                  appState.selectedPage === 6
                    ? `&pid2=${appState.selectedFriend.pid}`
                    : ``;
                let types_ = types ? `&types=${types}` : ``;
                let depth_ = formData.relation ? `&depth=${depth}` : `&depth=0`;

                pageDispatch({
                  type: `SETQUERYDATA`,
                  newQueryData: `pid1=${appState.selectedPerson.pid}${pid2}${types_}${depth_}`
                });
                console.log(
                  `pid1=${appState.selectedPerson.pid}${pid2}${types_}${depth_}`
                );
              }}
            >
              <label> {t("SEARCH.SEARCH")}</label>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { DefaultSearch, RelationSearch };
