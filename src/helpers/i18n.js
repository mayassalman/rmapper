import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      ENGLISH: "English",
      ARABIC: "العربية",
      HOME_TITLE: "Relationship Mapper",
      FIRST_HOME_DESC: "Easy , Trusted",
      SECOND_HOME_DESC: "Visualize Relationships",
      NAV_BAR: {
        HOME: "Home",
        ADD_PERSON: "Add person",
        SEARCH: "Search"
      },
      ADD_PERSON: {
        RELATIONSHIP: "Relationship",
        MAPPER: "Mapper",
        FORM: {
          NAME: "Name",
          SURNAME: "Surname",
          HOMETOWN: "Hometown",
          CITY: "City",
          RELIGION: "Religion",
          COMPANY: "Company",
          JOB: "Job",
          SCHOOL: "School",
          UNIVERSITY: "University",
          STATUS: "Relationship status",
          MARRIED: "Married",
          SINGLE: "Single",
          GENDER: "Choose gender",
          MALE: "Male",
          FEMALE: "Female"
        },
        ADD: "Add"
      },
      SEARCH: {
        SEARCH_FOR_PERSON: "Search for person",
        SEARCH: "Search"
      },
      PROFILE: {
        TITLE: "User profile",
        ADD_FRIEND: "Add friend",
        VIEW_RELATIONSHIP: "View relationship",
        FIND_RELATIONSHIP: "Find relationship",
        CITY: "City",
        RELATIONSHIP: "Relationship",
        RELIGION: "Religion",
        SCHOOL: "School",
        COMPANY: "Company",
        GENDER: "Gender",
        NAME: "Name"
      },
      MAKE_FRIEND: "Make friend",
      RELATIONSHIP: {
        FIND_RELATIONSHIP: "Find relationship between {{first}} and {{second}}",
        RELATIONSHIP_NOT_FOUND:
          "Sorry, relationships between {{first}} and {{second}} is not found",
        VIEW_RELATIONSHIP: "View relationship",
        LEVEL_RELATION: "Relation level",
        DIRECT: "Direct",
        HOMETOWN: "Hometown",
        CITY: "City",
        JOB: "Job",
        SCHOOL: "School",
        RELIGION: "Religion",
        COMPANY: "Company",
        UNIVERSITY: "University",
        LEVEL_ONE: "Level-1",
        LEVEL_TWO: "Level-2",
        LEVEL_THREE: "Level-3",
        VIEW: "View"
      },
      ALERT:{
        SUCCESFULLY_ADDED:"Person added successfully"
      }

    }
  },
  ar: {
    translation: {
      ENGLISH: "English",
      ARABIC: "العربية",
      HOME_TITLE: "مخطط العلاقات",
      FIRST_HOME_DESC: "سهل , موثوق",
      SECOND_HOME_DESC: "تصميم علاقات",
      NAV_BAR: {
        HOME: "الرئيسية",
        ADD_PERSON: "إضافة شخص",
        SEARCH: "بحث"
      },
      ADD_PERSON: {
        RELATIONSHIP: "برنامج",
        MAPPER: "العلاقات",
        FORM: {
          NAME: "الاسم",
          SURNAME: "اسم العائلة",
          HOMETOWN: "البلد",
          CITY: "المدينة",
          RELIGION: "الديانة",
          COMPANY: "الشركة",
          JOB: "العمل",
          SCHOOL: "المدرسة",
          UNIVERSITY: "الجامعة",
          STATUS: "الوضع العائلي",
          MARRIED: "متزوج",
          SINGLE: "أعزب",
          GENDER: "اختر الجنس",
          MALE: "ذكر",
          FEMALE: "أنثى"
        },
        ADD: "إضافة"
      },
      SEARCH: {
        SEARCH_FOR_PERSON: "البحث عن شخص",
        SEARCH: "بحث"
      },
      PROFILE: {
        TITLE: "الملف الشخصي",
        ADD_FRIEND: "إضافة صديق",
        VIEW_RELATIONSHIP: "عرض العلاقات",
        FIND_RELATIONSHIP: "إيجاد العلاقة",
        CITY: "المدينة",
        RELATIONSHIP: "الوضع العائلي",
        RELIGION: "الديانة",
        SCHOOL: "المدرسة",
        COMPANY: "الشركة",
        GENDER: " الجنس",
        NAME: "اسم العائلة"
      },
      MAKE_FRIEND: "تأكيد الصداقة",
      RELATIONSHIP: {
        FIND_RELATIONSHIP: "البحث عن علاقات بين {{first}} و {{second}}",
        RELATIONSHIP_NOT_FOUND:
          "عذرًا ، لم يتم العثور على العلاقات بين {{first}} و {{second}}",
        VIEW_RELATIONSHIP: "عرض العلاقات",
        LEVEL_RELATION: "مستوى العلاقة",
        DIRECT: "علاقة مباشرة",
        HOMETOWN: "البلد",
        CITY: "المدينة",
        JOB: "العمل",
        SCHOOL: "المدرسة",
        RELIGION: "الديانة",
        COMPANY: "الشركة",
        UNIVERSITY: "الجامعة",
        LEVEL_ONE: "المستوى-1",
        LEVEL_TWO: "المستوى-2",
        LEVEL_THREE: "المستوى-3",
        VIEW: "عرض"
      },
      ALERT:{
        SUCCESFULLY_ADDED:"تمت إضافة الشخص بنجاح"
      }
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: ".", // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
