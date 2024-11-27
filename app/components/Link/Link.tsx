import React from 'react';
import { LinkProps } from './Link.props';
import styles from './Link.module.css';

export const Link = ({ children }: LinkProps): JSX.Element => {
  return <a className={styles.link}>{children}</a>;
};
