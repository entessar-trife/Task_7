import { IconType } from "react-icons";

export interface InputComponentProps {
    inputStyle: string;
    label: string;
    labelColor?: string;
    type: string;
    placeHolder: string;
    id: string;
    htmlFor: string;
    border?: boolean;
    icon?: IconType;
}