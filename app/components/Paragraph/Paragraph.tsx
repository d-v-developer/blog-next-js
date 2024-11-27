import React from 'react';
import { ParagraphProps } from './Paragraph.props';
import styles from './Paragraph.module.css';

export const Paragraph = ({
  children,
  size = 's',
  ...props
}: ParagraphProps): JSX.Element => {
  switch (size) {
    case 's':
      return (
        <p className={styles.s} {...props}>
          {children}
        </p>
      );
    case 'm':
      return (
        <p className={styles.m} {...props}>
          {children}
        </p>
      );
    case 'l':
      return (
        <p className={styles.l} {...props}>
          {children}
        </p>
      );
    default:
      return <></>;
  }
};
