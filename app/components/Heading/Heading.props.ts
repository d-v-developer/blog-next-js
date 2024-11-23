import { HTMLAttributes } from "react";

export interface HeadingProps extends HTMLAttributes<HTMLHeadElement> {
    children: React.ReactNode,
    size?: 's' | 'm' | 'l'
}