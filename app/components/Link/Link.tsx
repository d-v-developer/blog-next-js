import React from 'react';
import { LinkProps } from './Link.props';
import styles from './Link.module.css';

export const Link = ({ children, ...props }: LinkProps): JSX.Element => {
	return (
		<a className={styles.link} {...props}>
			{children}
		</a>
	);
};
