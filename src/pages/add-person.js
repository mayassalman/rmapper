import React, { Fragment, useState, useContext, useEffect } from "react";
import Footer from "../compontents/footer";
import axios from "axios";
import { Loading } from "../helpers/util";
import { PageProvider, AppContext } from "../helpers/state";
import { useTranslation } from "react-i18next";

const AddPerson = ({ Id }) => {
  const { state: appState, dispatch: appDispatch } = useContext(AppContext);
  const [formData, setFormData] = useState({});
  const [loader, setLoader] = useState(false);
  let params = {
    // "pid": 10007,
    name: `${formData.name}`,
    surname: `${formData.surname}`,
    gender: `${formData.gender}`,
    rStatus: `${formData.rStatus}`,
    religion: `${formData.religion}`,
    company: `${formData.company}`,
    job: `${formData.job}`,
    hometown: `${formData.hometown}`,
    city: `${formData.city}`,
    school: `${formData.school}`,
    university: `${formData.university}`
    // "birthday": `${formData.birthday}`,
    // "phone": `${formData.rStatus}`,
    // "email": `${formData.rStatus}`,
    // "language": `${formData.language}`,
    // "street": `${formData.street}`,
  };
  let emptyparams = {
    // "pid": 10007,
    name: ``,
    surname: ``,
    gender: null,
    rStatus: null,
    religion: ``,
    company: ``,
    job: ``,
    hometown: ``,
    city: ``,
    school: ``,
    university: ``
  };

  const makePostRequest = async () => {
    setLoader(true);
    await axios
      .post("https://rmapper.infostrategic.com/service/persons", params)
      .then(res => {
        setFormData(emptyparams);
        alert(t("ALERT.SUCCESFULLY_ADDED"));
        appDispatch({
          type: `SETSELECTEDPERSON`,
          newSelectedPerson: res.data
        });
        setLoader(false);
      });
  };
  const updateFormData = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };
  const { t } = useTranslation();
  return (
    <PageProvider>
      {appState.selectedPage === Id && (
        <Fragment>
          {loader ? (
            <Loading />
          ) : (
            <>
              <div className="col-lg-12 col-md-12 col-sm-12 pl-5 m-4 ">
                <div class="col-lg-5  p-0 m-2">
                <div className="row">

                    <h2 className="add_title ">
                      {t("ADD_PERSON.RELATIONSHIP")}{" "}
                      <span>{t("ADD_PERSON.MAPPER")}</span>
                    </h2>
                  </div>
                </div>

                <div className="col-9 pb-4 pt-4">
                  <div className="row">
                    <div class="col-lg-5 input-effect p-0 m-2">
                      <input
                        class="effect-20"
                        type="text"
                        placeholder=""
                        name="name"
                        value={formData.name}
                        onChange={e => updateFormData(e)}
                      />
                      <label>{t("ADD_PERSON.FORM.NAME")}</label>
                      <span class="focus-border">
                        <i></i>
                      </span>
                    </div>
                    <div class="col-lg-5 input-effect p-0 m-2">
                      <input
                        class="effect-20"
                        type="text"
                        placeholder=""
                        name="surname"
                        value={formData.surname}
                        onChange={e => updateFormData(e)}
                      />
                      <label>{t("ADD_PERSON.FORM.SURNAME")} </label>
                      <span class="focus-border">
                        <i></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-9 pb-4">
                  <div className="row">
                    <div class="col-lg-5 input-effect p-0 m-2">
                      <input
                        class="effect-20"
                        type="text"
                        placeholder=""
                        name="hometown"
                        value={formData.hometown}
                        onChange={e => updateFormData(e)}
                      />
                      <label>{t("ADD_PERSON.FORM.HOMETOWN")}</label>
                      <span class="focus-border">
                        <i></i>
                      </span>
                    </div>
                    <div class="col-lg-5 input-effect p-0 m-2">
                      <input
                        class="effect-20"
                        type="text"
                        placeholder=""
                        name="city"
                        value={formData.city}
                        onChange={e => updateFormData(e)}
                      />
                      <label>{t("ADD_PERSON.FORM.CITY")}</label>
                      <span class="focus-border">
                        <i></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-9 pb-4">
                  <div className="row">
                    <div className="col-lg-5 p-0 select m-2">
                      <select
                        name="rStatus"
                        id="rStatus"
                        value={formData.rStatus}
                        onChange={e => updateFormData(e)}
                      >
                        <option selected disabled>
                          {t("ADD_PERSON.FORM.STATUS")}
                        </option>
                        <option value="married">
                          {t("ADD_PERSON.FORM.MARRIED")}
                        </option>
                        <option value="single">
                          {t("ADD_PERSON.FORM.SINGLE")}
                        </option>
                      </select>
                    </div>

                    <div className="col-lg-5 p-0 select m-2">
                      <select
                        name="gender"
                        id="gender"
                        value={formData.gender}
                        onChange={e => updateFormData(e)}
                      >
                        <option selected disabled>
                          {t("ADD_PERSON.FORM.GENDER")}
                        </option>
                        <option value="male">
                          {t("ADD_PERSON.FORM.MALE")}
                        </option>
                        <option value="female">
                          {t("ADD_PERSON.FORM.FEMALE")}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-9 pb-4">
                  <div className="row">
                    <div class="col-lg-5 input-effect p-0 m-2">
                      <input
                        class="effect-20"
                        type="text"
                        placeholder=""
                        name="religion"
                        value={formData.religion}
                        onChange={e => updateFormData(e)}
                      />
                      <label>{t("ADD_PERSON.FORM.RELIGION")}</label>

                      <span class="focus-border">
                        <i></i>
                      </span>
                    </div>
                    <div class="col-lg-5 input-effect p-0 m-2">
                      <input
                        class="effect-20"
                        type="text"
                        placeholder=""
                        name="company"
                        value={formData.company}
                        onChange={e => updateFormData(e)}
                      />
                      <label>{t("ADD_PERSON.FORM.COMPANY")}</label>

                      <span class="focus-border">
                        <i></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-9 pb-4">
                  <div className="row">
                    <div class="col-lg-5 input-effect p-0 m-2">
                      <input
                        class="effect-20"
                        type="text"
                        placeholder=""
                        name="job"
                        value={formData.job}
                        onChange={e => updateFormData(e)}
                      />
                      <label>{t("ADD_PERSON.FORM.JOB")}</label>

                      <span class="focus-border">
                        <i></i>
                      </span>
                    </div>
                    <div class="col-lg-5 input-effect p-0 m-2">
                      <input
                        class="effect-20"
                        type="text"
                        placeholder=""
                        name="school"
                        value={formData.school}
                        onChange={e => updateFormData(e)}
                      />
                      <label>{t("ADD_PERSON.FORM.SCHOOL")}</label>

                      <span class="focus-border">
                        <i></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-9 pb-4">
                  <div className="row">
                    <div class="col-lg-5 input-effect p-0 m-2">
                      <input
                        class="effect-20"
                        type="text"
                        placeholder=""
                        name="university"
                        value={formData.university}
                        onChange={e => updateFormData(e)}
                      />
                      <label>{t("ADD_PERSON.FORM.UNIVERSITY")}</label>

                      <span class="focus-border">
                        <i></i>
                      </span>
                    </div>
                    <div class="col-lg-5  p-0 ">
                      <div class="btn-bg bg-3">
                        <div class="btnn btn-3">
                          <button onClick={makePostRequest}>
                            {t("ADD_PERSON.ADD")}
                          </button>
                        </div>{" "}
                      </div>{" "}
                    </div>
                  </div>
                </div>
              </div>
      <div style={{height:"50px"}}></div>
            
            </>
          )}

          <Footer />
        </Fragment>
      )}
    </PageProvider>
  );
};

export default AddPerson;
