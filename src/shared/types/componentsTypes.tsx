import { ReactNode } from "react";

export type flexType = {
    props?: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> | undefined;
    className: string;
    children: ReactNode;
}

export type boxType = {
    props?: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>,  HTMLInputElement> | undefined;
    className: string;
    children: ReactNode;
}
