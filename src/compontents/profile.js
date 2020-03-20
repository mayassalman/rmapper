import React, { Fragment, useState, useEffect } from "react";
import { useContext } from "react";
import { PageContext, AppContext } from "../helpers/state";
import { addFriendRequest } from "../helpers/util";
import { useTranslation } from "react-i18next";

const ProfileNavBar = ({ Id }) =>
  Id === 3 ? <FriendNavBar /> : <PersonNavBar />;

const PersonNavBar = () => {
  const { t } = useTranslation();

  const { dispatch: appDispatch } = useContext(AppContext);
  return (
    <Fragment>
      <div className="col-lg-12 m-2 one">
        <div class="btn-bg bg-3">
          <div class="btnn btn-3">
            <button
              onClick={() => {
                appDispatch({
                  type: `SETSELECTEDPAGE`,
                  newSelectedPage: 3
                });
              }}
            >
              {t("PROFILE.ADD_FRIEND")}
            </button>
          </div>{" "}
        </div>
      </div>

      <div className="col-lg-12  m-2 two ">
        <div class="btn-bg bg-3">
          <div class="btnn btn-3">
            <button
              onClick={() => {
                appDispatch({
                  type: `SETSELECTEDPAGE`,
                  newSelectedPage: 2
                });
                appDispatch({
                  type: `SETSELECTEDFRIEND`,
                  newSelectedFriend: {}
                });
              }}
            >
              {t("PROFILE.VIEW_RELATIONSHIP")}
            </button>
          </div>{" "}
        </div>
      </div>

      <div className="col-lg-12  m-2 one ">
        <div class="btn-bg bg-3">
          <div class="btnn btn-3">
            <button
              onClick={() => {
                appDispatch({
                  type: `SETSELECTEDPAGE`,
                  newSelectedPage: 3
                });
              }}
            >
              {t("PROFILE.FIND_RELATIONSHIP")}
            </button>
          </div>{" "}
        </div>
      </div>
    </Fragment>
  );
};
const FriendNavBar = () => {
  const { t } = useTranslation();

  const { state: appState, dispatch: appDispatch } = useContext(AppContext);
  return (
    <Fragment>
      <div className="col-lg-12  m-2 two ">
        <div class="btn-bg bg-3">
          <div class="btnn btn-3">
            <button
              onClick={() => {
                addFriendRequest(
                  appState.selectedPerson.pid,
                  appState.selectedFriend.pid,t
                );
              }}
            >
              {t("PROFILE.ADD_FRIEND")}
            </button>
          </div>{" "}
        </div>
      </div>

      <div className="col-lg-12  m-2 one ">
        <div class="btn-bg bg-3">
          <div class="btnn btn-3">
            <button
              onClick={() => {
                appDispatch({
                  type: `SETSELECTEDPAGE`,
                  newSelectedPage: 6
                });
              }}
            >
              {t("PROFILE.VIEW_RELATIONSHIP")}
            </button>
          </div>{" "}
        </div>
      </div>
    </Fragment>
  );
};

const Profile = ({ Id }) => {
  const { state: pageState } = useContext(PageContext);
  const { t } = useTranslation();

  const [personProfile, setPersonProfile] = useState(<div></div>);
  useEffect(() => {
    setPersonProfile(
      <Fragment>
        <div className="row">
          <div className="col-lg-12  mb-5">
            <div className="row">
              <div className="col-lg-12 ">
              <div className="row">
                <div className="col-lg-3  ">
                    <div className="row m-5">
                      {/* <hr style={{ borderTop: " 1px solid #3e4a6e" }} /> */}
                      
                      <ProfileNavBar Id={Id} />
                      
                    </div>{" "}
                  </div>
                <div className="col-lg-3 borders">
                    <div className="col-lg-12 ">
                      <img
                        className="profile_img"
                        alt="user profile"
                        src="/image/user.png"
                      />
                    </div>

                    <div className="col-lg-12   personal_info">
                      <p className="profile_name ">
                        {pageState.selectedRecord.name}
                      </p>
                      <p>{pageState.selectedRecord.surname}</p>
                    </div>
                  </div>
                <div className="col-lg-6  display_info">
                  <div className="col-lg-12 ml-4">
                    <div className="row">
                      <div className="col-lg-3">
                        {" "}
                        <i class="fas fa-location-arrow  icon_info"></i>
                        &nbsp;&nbsp;
                        <span className="content_title_info">
                          {t("PROFILE.CITY")} :
                        </span>{" "}
                      </div>
                      <div className="col-lg-3">
                        <span className="content_info">
                          {" "}
                          {pageState.selectedRecord.city}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 ml-4">
                    <div className="row">
                      <div className="col-lg-3">
                        {" "}
                        <i class="fas fa-ring  icon_info"></i> &nbsp;&nbsp;
                        <span className="content_title_info">
                          {t("PROFILE.RELATIONSHIP")} :
                        </span>
                      </div>
                      <div className="col-lg-3">
                        <span className="content_info">
                          {pageState.selectedRecord.rStatus}
                        </span>
                      </div>{" "}
                    </div>
                  </div>

                  <div className="col-lg-12 ml-4">
                    <div className="row">
                      <div className="col-lg-3">
                        {" "}
                        <i class="fas fa-praying-hands icon_info"></i>&nbsp;&nbsp;
                        <span className="content_title_info">
                          {t("PROFILE.RELIGION")} :
                        </span>
                      </div>
                      <div className="col-lg-3">
                        <span className="content_info">
                          {pageState.selectedRecord.religion}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 ml-4">
                    <div className="row">
                      <div className="col-lg-3">
                        {" "}
                        <i class="fas fa-graduation-cap  icon_info"></i>
                        &nbsp;&nbsp;
                        <span className="content_title_info">
                          {t("PROFILE.SCHOOL")} :
                        </span>
                      </div>
                      <div className="col-lg-3">
                        <span className="content_info">
                          {" "}
                          {pageState.selectedRecord.school}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 ml-4">
                    <div className="row">
                      <div className="col-lg-3">
                        {" "}
                        <i class="fas fa-building  icon_info"></i>&nbsp;&nbsp;
                        <span className="content_title_info">
                          {t("PROFILE.COMPANY")} :
                        </span>
                      </div>
                      <div className="col-lg-3">
                        <span className="content_info">
                          {pageState.selectedRecord.company}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 ml-4">
                    <div className="row">
                      <div className="col-lg-3">
                        {" "}
                        <i class="fas fa-user  icon_info"></i>&nbsp;&nbsp;
                        <span className="content_title_info">
                          {t("PROFILE.GENDER")} :
                        </span>{" "}
                      </div>
                      <div className="col-lg-3">
                        <span className="content_info">
                          {" "}
                          {pageState.selectedRecord.gender}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {" "}
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }, [Id, t, pageState.selectedRecord]);

  return pageState.selectedRecord.pid > 0 && personProfile;
};

export { Profile };
