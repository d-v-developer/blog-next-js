import { HTMLAttributes } from "react";

export interface InfoTextProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode,
    color?: 'black' | 'gray'
}