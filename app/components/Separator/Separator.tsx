import React from 'react';
import styles from './Separator.module.css';
import { SeparatorProps } from './Separator.props';

export const Separator = ({ ...props }: SeparatorProps): JSX.Element => {
  return (
    <span className={styles.text} {...props}>
      ·
    </span>
  );
};
