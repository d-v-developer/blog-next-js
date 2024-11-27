import { Heading } from './components/Heading/Heading';
import { InfoText } from './components/InfoText/InfoText';
import { Like } from './components/Like/Like';
import { Separator } from './components/Separator/Separator';
import styles from './page.module.css';
import { Paragraph } from './components/Paragraph/Paragraph';
import ArrowIcon from '../public/arrow.svg';
import { Link } from './components/Link/Link';
import { PostLike } from './components/PostLikeManager/PostLikeManager';

export default function Home(): JSX.Element {
	return (
		<>
			<div className={styles.wrapper}>
				<div
					className={styles.img}
					style={{
						backgroundImage: "url('./mini.png')",
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
					}}
				></div>
				<div className={styles.main}>
					<div className={styles.subheading}>
						<div className={styles.line}>
							<InfoText color="black">Front-end</InfoText>
							<Separator />
							<InfoText>1 месяц назад</InfoText>
						</div>
						<Like className={styles.line} count={4} />
					</div>
					<div className="text">
						<Heading size="s">Как работать с CSS Grid</Heading>
						<Paragraph>
							Грид-раскладка (CSS Grid Layout) представляет собой
							двумерную систему сеток в CSS. Гриды подойдут и для
							верстки основных областей страницы..
						</Paragraph>
					</div>
				</div>
				<div className={styles.footer}>
					<InfoText>3 минуты</InfoText>
					<Link href="/">
						Читать <ArrowIcon />
					</Link>
				</div>
			</div>
			<PostLike />
		</>
	);
}
