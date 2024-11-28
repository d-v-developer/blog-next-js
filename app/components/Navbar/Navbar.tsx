import React from 'react';
import styles from './Navbar.module.css';
import { CustomLink } from '../CustomLink/CustomLink';
import GitHubIcon from '../../../public/github-icon.svg';
import { GITHUB_URL } from '@/app/layout';
import { NavBarProps } from './NavBar.props';
import cn from 'classnames';

export const Navbar = ({ className, ...props }: NavBarProps): JSX.Element => {
	return (
		<div className={cn(className, styles.nav)} {...props}>
			<span className={styles.logo}>.my_blog</span>
			<CustomLink
				href={GITHUB_URL}
				target="_blank"
				rel="noopener noreferrer"
			>
				<GitHubIcon />
			</CustomLink>
		</div>
	);
};
