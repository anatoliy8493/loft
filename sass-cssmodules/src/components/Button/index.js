import React from 'react';
import cn from 'classnames';

import styles from './Button.module.sass';

const Button = React.memo(({children, theme, size, onClick, fullWidth, rounded = false, ...rest}) => {
  // BS
  // const classNames = [
  //   styles.button,
  //   theme !== undefined ? styles[`button_theme_${theme}`] : '',
  // ].join(' ');

  const classNames = cn(
    styles.button,
    {'button_fill-width': fullWidth === true},
    {'button_rounded': rounded === true},
    {[styles[[`button_theme_${theme}`]]]: theme !== undefined},
    {[styles[[`button_theme_${size}`]]]: size !== undefined},
  );

  return (
    <button onClick={onClick} className={classNames} {...rest}>{children}</button>
  );
});

export default Button;
