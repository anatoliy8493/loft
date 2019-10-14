import React from 'react';

import * as S from './style';

const Button = React.memo(({children, theme, ...rest}) => (
  <S.Button theme={theme} {...rest}>
    <S.Text theme={theme}>{children}</S.Text>
  </S.Button>
));

export default Button;
