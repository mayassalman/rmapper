import React from "react";
import {  Link } from "react-router-dom";
import { changeDirection } from "./documentsUtils";
import { useTranslation } from "react-i18next";



export const LanguageToggle=()=>{
    const { t, i18n } = useTranslation();
  
    return(
      
      <div className="navbar navbar-expand-lg navbar-light">
         
      <div className="m-auto">
        <Link
          className="navbar-brand text-primary"
          onClick={() => {
            changeDirection("ltr");
            i18n.changeLanguage("en");
          }}
        >
          {t("ENGLISH")}
        </Link>
        <Link
          className="navbar-brand text-primary"
          onClick={() => {
            changeDirection("rtl");
            i18n.changeLanguage("ar");
          }}
        >
          {t("ARABIC")}
        </Link>
      </div>
   
    </div>
   
    )
  }