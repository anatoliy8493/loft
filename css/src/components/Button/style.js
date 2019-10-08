import styled, {css} from 'styled-components/native';
import {Text as BaseText, TouchableOpacity} from 'react-native';

import {colors} from '../../styles';
import {resetButton} from '../../styles/mixins';

const baseStyle = css`
  ${resetButton}
  padding: 8px 12px;
  color: ${colors.black};
  /* cursor: pointer; */
`;

const getColorStyle = ({theme}) => {
  switch (theme) {
    case 'red':
    case 'green':
    case 'blue': return `color: ${colors.white};`;
    default: return `color: ${colors.black};`;
  }
}

const getBackgroundColorStyle = ({theme}) => {
  switch (theme) {
    case 'red': return `background-color: ${colors.red};`;
    case 'green': return `background-color: ${colors.green};`;
    case 'blue': return `background-color: ${colors.blue};`;
    default: return `background-color: ${colors.white};`;
  }
}

export const Button = styled(TouchableOpacity)`
  ${baseStyle}
  ${getBackgroundColorStyle}
`;

export const Text = styled(BaseText)`
  ${getColorStyle}
`;
