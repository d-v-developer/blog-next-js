import { PostLike } from './components/PostLikeManager/PostLikeManager';
import { Post } from './components/Post/Post';
import { PostProps } from './components/Post/Post.props';
import styles from './page.module.css';

export default function Home(): JSX.Element {
	return (
		<div className={styles.posts}>
			{[...Array(8)].map((p: PostProps, i: number) => {
				return (
					<Post
						key={i}
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
				);
			})}
			<PostLike />
		</div>
	);
}
