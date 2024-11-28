import { AnchorHTMLAttributes, ReactNode } from "react";

export interface CustomLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    children: ReactNode
}