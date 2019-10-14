import React from 'react';
// import cn from 'classnames';

import './style.sass';

const Button = React.memo(({children, theme, ...rest}) => {
  // BS
  const classNames = [
    'button',
    theme !== undefined ? `button_theme_${theme}` : '',
  ].join(' ');

  // const classNames = cn(
  //   'button',
  //   {[`button_theme_${theme}`]: theme !== undefined},
  // );

  return (
    <button className={classNames} {...rest}>{children}</button>
  );
});

export default Button;
