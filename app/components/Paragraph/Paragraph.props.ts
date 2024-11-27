import { HTMLAttributes } from "react";

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
    children: React.ReactNode,
    size?: 's' | 'm' | 'l'
}