import { InputComponentProps } from "@/type/InputComponent";
import { TFunction } from "i18next";
import { BiCalendar } from "react-icons/bi";
import { LuClock3 } from "react-icons/lu";

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
    type: "text",
    placeHolder: t("select_date"),
    htmlFor: "date",
    id: "date",
    icon: BiCalendar,
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
    type: "text",
    placeHolder: t("select_time"),
    htmlFor: "time",
    id: "time",
    icon: LuClock3,
  },
];
