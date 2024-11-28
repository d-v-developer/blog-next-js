import { HTMLAttributes, ReactNode } from "react";

export interface PostProps extends HTMLAttributes<HTMLDivElement> {
    image: string, 
    category: string,
    published: string,
    likes: number,
    title: string,
    body: string,
    readingTime: string,
    url?: string
}