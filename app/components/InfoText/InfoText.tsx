import React from 'react';
import styles from './InfoText.module.css';
import { InfoTextProps } from './InfoText.props';
import cn from 'classnames';

export const InfoText = ({
  children,
  color = 'gray',
  ...props
}: InfoTextProps): JSX.Element => {
  return (
    <div
      className={cn(styles.text, {
        [styles.black]: color === 'black',
        [styles.gray]: color === 'gray',
      })}
      {...props}
    >
      {children}
    </div>
  );
};
