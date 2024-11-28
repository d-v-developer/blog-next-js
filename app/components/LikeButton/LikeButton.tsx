import React from 'react';
import { LikeButtonProps } from './LikeButton.props';
import LikeHand from '../../../public/hand-like-icon.svg';
import styles from './LikeButton.module.css';
import cn from 'classnames';

export const LikeButton = ({
	isLiked,
	onLikeChange,
}: LikeButtonProps): JSX.Element => {
	const onClick = (): void => {
		onLikeChange(!isLiked);
	};
	return (
		<button
			className={cn(styles.like, {
				[styles.isLiked]: isLiked,
			})}
			onClick={onClick}
		>
			<LikeHand />
		</button>
	);
};
