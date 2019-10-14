import styled from 'styled-components';

import {mixins} from './styles';

export const App = styled.div`
  padding: 32px;
`;

export const CardsList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;

  ${mixins.media.tablet`
    grid-template-columns: 1fr 1fr;
    grid-gap: 24px;
  `}

  ${mixins.media.desktop`
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 32px;
  `}
`;

export const Title = styled.p`
  margin-bottom: 8px;
  font-weight: bold;
`;

export const Card = styled.div`
  ${mixins.paper}
  padding: 24px 16px;
`;

export const CardAvatar = styled.img`
  ${mixins.round('40px')}
  margin-bottom: 16px;
`;

export const CardName = styled.div`
  ${mixins.font('16px', '18px', 700)}
  margin-bottom: 24px;
`;

export const CardDescription = styled.div`
  ${mixins.font('14px', '16px')}
  margin-bottom: 16px;
`;
