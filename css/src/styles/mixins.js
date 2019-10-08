import {css} from 'styled-components';

import colors from './colors';
import {ANIMATION_DURATION} from '../constants';

export const wh = (width, height = width) => css`
  width: ${width};
  height: ${height};
`;

export const round = (size) => css`
  ${wh(size)}
  overflow: hidden;
  border-radius: ${size / 2};
`;

export const font = (fontSize, lineHeight) => css`
  font-size: ${fontSize};
  line-height: ${lineHeight};
`;

const sizes = {
  phone: 320,
  tablet: 768,
  desktop: 1024,
};

export const media = (Object.keys(sizes)).reduce(
  (acc, label) => {
    acc[label] = (first, ...interpolations) => css`
      @media (min-width: ${sizes[label]}px) {
        ${css(first, ...interpolations)}
      }
    `;

    return acc;
  },
  {},
);

export const resetButton = css`
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  background: transparent;
  color: inherit;
`;

export const paper = css`
  border-radius: 4;
  background-color: ${colors.white};
  shadow-opacity: 0.32;
  shadow-radius: 4px;
  shadow-color: #000000;
  shadow-offset: 0px 0px;
`;
