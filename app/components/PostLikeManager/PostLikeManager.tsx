'use client';

import React, { useState } from 'react';
import { LikeButton } from '../LikeButton/LikeButton';
import axios, { AxiosResponse } from 'axios';

export interface ResponseData {
	userId: number;
	id: number;
	title: string;
	body: string;
}

export const PostLike = (): JSX.Element => {
	const [isLiked, setIsLiked] = useState<boolean>(false);

	const onLikeChange = async (like: boolean): Promise<void> => {
		try {
			const { data }: AxiosResponse<ResponseData> = await axios.patch(
				'https://jsonplaceholder.typicode.com/posts/1',
				{ title: 'foo' },
				{
					headers: {
						'Content-type': 'application/json; charset=UTF-8',
					},
				}
			);
			console.log(data);
			setIsLiked(like);
		} catch (e) {
			console.error(e);
		}
	};
	return (
		<div>
			<LikeButton isLiked={isLiked} onLikeChange={onLikeChange} />
		</div>
	);
};
