import { ButtonHTMLAttributes } from "react";

export interface LikeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    isLiked: boolean,
    onLikeChange: (isLiked: boolean) => void
}