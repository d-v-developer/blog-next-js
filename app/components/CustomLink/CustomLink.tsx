import React from 'react';
import { CustomLinkProps } from './CustomLink.props';
import styles from './CustomLink.module.css';

export const CustomLink = ({
	children,
	...props
}: CustomLinkProps): JSX.Element => {
	return (
		<a className={styles.link} {...props}>
			{children}
		</a>
	);
};
