import styled from 'styled-components/native';
import {Text, View, Image, ScrollView} from 'react-native';

import {mixins} from './styles';

export const App = styled(ScrollView)`
  padding: 64px 32px 32px;
`;

export const CardsList = styled(View)`
  display: flex;
  flex-direction: column;
`;

export const Title = styled(Text)`
  margin-bottom: 8px;
  font-weight: bold;
`;

export const Card = styled(View)`
  ${mixins.paper}
  padding: 24px 16px;
  margin-bottom: 24px;
`;

export const CardAvatar = styled(Image)`
  ${mixins.round(40)}
  margin-bottom: 16px;
`;

export const CardName = styled(Text)`
  ${mixins.font('16px', '18px')}
  margin-bottom: 24px;
`;

export const CardDescription = styled(Text)`
  ${mixins.font('14px', '16px')}
  margin-bottom: 16px;
`;
