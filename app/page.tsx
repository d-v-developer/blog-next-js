import { Heading } from './components/Heading/Heading';
import { InfoText } from './components/InfoText/InfoText';
import { Like } from './components/Like/Like';
import { Separator } from './components/Separator/Separator';
import styles from './page.module.css';
import { Paragraph } from './components/Paragraph/Paragraph';
import ArrowIcon from '../public/arrow.svg';
import { Link } from './components/Link/Link';
import { PostLike } from './components/PostLikeManager/PostLikeManager';
import { Post } from './components/Post/Post';

export default function Home(): JSX.Element {
	return (
		<>
			<Post
				image="mini.png"
				category="Front-end"
				published="1 месяц назад"
				likes={4}
				title="Как работать с CSS Grid"
				body="Грид-раскладка (CSS Grid Layout) представляет собой
							двумерную систему сеток в CSS. Гриды подойдут и для
							верстки основных областей страницы.."
				readingTime="3 минуты"
			/>
			<PostLike />
		</>
	);
}
