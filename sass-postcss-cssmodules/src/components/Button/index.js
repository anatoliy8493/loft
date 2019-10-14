import React from 'react';
import cn from 'classnames';

import styles from './Button.module.sass';

const Button = React.memo(({children, theme, ...rest}) => {
  // BS
  const classNames = [
    styles.button,
    theme !== undefined ? styles[`button_theme_${theme}`] : '',
  ].join(' ');

  // const classNames = cn(
  //   styles.button,
  //   {[styles[[`button_theme_${theme}`]]]: theme !== undefined},
  // );

  return (
    <button className={classNames} {...rest}>{children}</button>
  );
});

export default Button;
