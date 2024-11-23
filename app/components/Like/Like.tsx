import { LikeProps } from './Like.props';
import LikeIcon from '../../../public/like-icon.svg';
import styles from './Like.module.css';
import cn from 'classnames';

export const Like = ({
  count,
  className,
  ...props
}: LikeProps): JSX.Element => {
  return (
    <div className={cn(styles.like, className)} {...props}>
      {count}&nbsp;
      <LikeIcon className={styles['like-icon']} />
    </div>
  );
};
