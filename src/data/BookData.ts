import { InputComponentProps } from "@/type/InputComponent";
import { t, TFunction } from "i18next";
import { SlCalender } from "react-icons/sl";

export const getBookData = (t: TFunction): InputComponentProps[] => [
  {
    inputStyle: "gap-2",
    label: t("name"),
    type: "text",
    placeHolder: t("enter_name"),
    htmlFor: "name",
    id: "name",
  },
  {
    inputStyle: "gap-2",
    label: t("number"),
    type: "number",
    placeHolder: t("enter_number"),
    htmlFor: "number",
    id: "number",
  },
  {
    inputStyle: "gap-2",
    label: t("date"),
    type: "date",
    placeHolder: t("select_date"),
    htmlFor: "date",
    id: "date",
  },
  {
    inputStyle: "gap-2",
    label: t("email"),
    type: "email",
    placeHolder: t("enter_email"),
    htmlFor: "email",
    id: "email",
  },
  {
    inputStyle: "gap-2",
    label: t("service"),
    type: "select",
    placeHolder: t("select_service"),
    htmlFor: "service",
    id: "service",
  },
  {
    inputStyle: "gap-2",
    label: t("time"),
    type: "time",
    placeHolder: t("select_time"),
    htmlFor: "time",
    id: "time",

  },
];
