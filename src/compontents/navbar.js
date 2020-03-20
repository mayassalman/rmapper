import React, { Fragment, useEffect, useState } from "react";
import { AppContext } from "../helpers/state";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { LanguageToggle } from './language-switcher';

const Button = ({ caption, Id, cssClass }) => {
  const { state:appstate,dispatch: appDispatch } = useContext(AppContext);
  const handleClick = Id => {
    appDispatch({
      type: `SETSELECTEDPAGE`,
      newSelectedPage: Id
    });
  };
  return (
    <div className={`m-2 ${cssClass}  `}>
      <div class="btn-bg bg-3 ">
        <div class="btnn btn-3">
          <button onClick={() => handleClick(Id)}>{caption}</button>
        </div>{" "}
      </div>
    </div>
  );
};

const NavBar = () => {
  const { state: appState } = useContext(AppContext);
  const [navBar, setNavBar] = useState([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    setNavBar(
      <div className="row m-2">
        <div className=" col-lg-10">
          <div className="row">
        <LanguageToggle />

            {appState.navbarData.map((btn, i) => 
                  <Button
              caption={t(btn.caption)}
                    Id={btn.Id}
                    cssClass={i%2===0 ? "one" : "two"}
                  />
            )}
          </div>
        </div>
      </div>
    );
  }, [t]);
  return navBar;
};
export default NavBar;
