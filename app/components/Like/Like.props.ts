import { HTMLAttributes } from "react";

export interface LikeProps extends HTMLAttributes<HTMLDivElement> {
    count: number
}