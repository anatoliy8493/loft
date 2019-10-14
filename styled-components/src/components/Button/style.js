import styled, {css} from 'styled-components';

import {resetButton} from '../../styles/mixins';

const baseStyle = css`
  ${resetButton}
  padding: 8px 12px;
  color: var(--black);
  cursor: pointer;
`;

const getColorStyle = ({theme}) => {
  switch (theme) {
    case 'red':
    case 'green':
    case 'blue': return `color: var(--white);`;
    default: return `color: var(--black);`;
  }
}

const getBackgroundColorStyle = ({theme}) => {
  switch (theme) {
    case 'red': return `background-color: var(--red);`;
    case 'green': return `background-color: var(--green);`;
    case 'blue': return `background-color: var(--blue);`;
    default: return `background-color: var(--white);`;
  }
}

export const Button = styled.button`
  ${baseStyle}
  ${getColorStyle}
  ${getBackgroundColorStyle}
`;
