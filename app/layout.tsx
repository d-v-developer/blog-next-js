import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import { Navbar } from './components/Navbar/Navbar';
import cn from 'classnames';
import styles from './page.module.css';

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
			<body className={cn(inter.className, styles.wrapper)}>
				<Navbar className={styles.navbar} />
				<div className={styles.body}>{children}</div>
			</body>
		</html>
	);
}
