import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import styles from './page.module.css';
import GitHubIcon from '../public/github-icon.svg';
import { Link } from './components/Link/Link';

export const GITHUB_URL = 'https://github.com/d-v-developer';

const inter = Open_Sans({
	subsets: ['cyrillic', 'latin'],
	weight: ['300', '400', '500', '700'],
});

export const metadata: Metadata = {
	title: 'Frontend Journey Blog',
	description: 'Свежие идеи и практики для разработчиков',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>): JSX.Element {
	return (
		<html lang="ru">
			<body className={inter.className}>
				<nav className={styles.nav}>
					<span className={styles.logo}>.my_blog</span>
					<Link
						href={GITHUB_URL}
						target="_blank"
						rel="noopener noreferrer"
					>
						<GitHubIcon />
					</Link>
				</nav>
				{children}
			</body>
		</html>
	);
}
