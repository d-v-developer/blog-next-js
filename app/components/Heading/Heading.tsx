import React from 'react';
import { HeadingProps } from './Heading.props';
import styles from './Heading.module.css';

export const Heading = ({
  children,
  size = 's',
  ...props
}: HeadingProps): JSX.Element => {
  switch (size) {
    case 's':
      return (
        <h3 className={styles.h3} {...props}>
          {children}
        </h3>
      );
    case 'm':
      return (
        <h2 className={styles.h2} {...props}>
          {children}
        </h2>
      );
    case 'l':
      return (
        <h1 className={styles.h1} {...props}>
          {children}
        </h1>
      );
    default:
      return <></>;
  }
};
