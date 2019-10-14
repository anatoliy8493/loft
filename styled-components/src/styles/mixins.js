import {css} from 'styled-components';

import {ANIMATION_DURATION} from '../constants';

export const wh = (width, height = width) => css`
  width: ${width};
  height: ${height};
`;

export const round = (size) => css`
  ${wh(size)}
  overflow: hidden;
  border-radius: 50%;
`;

export const font = (fontSize, lineHeight, fontWeight) => css`
  font-size: ${fontSize};
  line-height: ${lineHeight};
  font-weight: ${fontWeight};
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
  font: inherit;
  line-height: normal;
  font-smoothing: inherit;
  appearance: none;
`;

export const paper = css`
  border-radius: 4px;
  overflow: hidden;
  background-color: var(--white);
  box-shadow: 0 0 4px rgba(0, 0, 0, .32);
  transition: box-shadow ${ANIMATION_DURATION}s;

  :hover {
    box-shadow: 0 0 16px rgba(0, 0, 0, .4);
  }
`;
