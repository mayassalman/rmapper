import React, { Fragment, useContext } from "react";
import Footer from "./footer";
import { PageProvider, AppContext } from "../state";
import { useTranslation } from "react-i18next";

const Home = ({ Id }) => {
  const { state: appState } = useContext(AppContext);
  const { t } = useTranslation();

  return (
    <PageProvider>
      {appState.selectedPage === Id && (
        <Fragment>
          <div className="home_title">
            <h1>{t("HOME_TITLE")}</h1>

            <span></span>
            
            <p className="p_type">{t("FIRST_HOME_DESC")}</p>
            <br />
            <p className="p_type">{t("SECOND_HOME_DESC")}</p>
            
          </div>
          <Footer />
        </Fragment>
      )}
    </PageProvider>
  );
};

export default Home;
