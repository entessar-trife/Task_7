import { InputComponentProps } from "@/type/InputComponent";
import { TFunction } from "i18next";

export const getLogInPopupData = (t: TFunction): InputComponentProps[] => [
    {
        label: t("email"),
        placeHolder: t("enter_email"),
        htmlFor: "email",
        id: "email",
        type: "email",
        border: true,
        inputStyle: "gap-2.5",
    },
    {
        label: t("password"),
        placeHolder: t("enter_password"),
        htmlFor: "password",
        id: "password",
        type: "password",
        border: true,
        inputStyle: "gap-2.5",
    },
]