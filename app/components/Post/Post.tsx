import React from 'react';
import { PostProps } from './Post.props';
import styles from './Post.module.css';
import { InfoText } from '../InfoText/InfoText';
import { Separator } from '../Separator/Separator';
import { Like } from '../Like/Like';
import { Heading } from '../Heading/Heading';
import { Paragraph } from '../Paragraph/Paragraph';
import { Link } from '../Link/Link';
import ArrowIcon from '../../../public/arrow.svg';

export const Post = ({
	image,
	category,
	published,
	likes,
	title,
	body,
	readingTime,
	url = '/',
}: PostProps): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<div
				className={styles.img}
				style={{
					backgroundImage: `${image}`,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
				}}
			></div>
			<div className={styles.main}>
				<div className={styles.subheading}>
					<div className={styles.line}>
						<InfoText color="black">{category}</InfoText>
						<Separator />
						<InfoText>{published}</InfoText>
					</div>
					<Like className={styles.line} count={likes} />
				</div>
				<div className="text">
					<Heading size="s">{title}</Heading>
					<Paragraph>{body}</Paragraph>
				</div>
			</div>
			<div className={styles.footer}>
				<InfoText>{readingTime}</InfoText>
				<Link href={url}>
					Читать <ArrowIcon />
				</Link>
			</div>
		</div>
	);
};
