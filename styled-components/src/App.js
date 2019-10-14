import React from 'react';

import * as S from './style';
import {Button} from './components';

const CARDS_LIST = [
  {
    id: 0,
    name: 'First',
    theme: 'red',
    description: 'First card description',
    avatarSrc: 'https://play-host.ru/images/adorable-cat-background-wallpaper-18607.jpg',
  },
  {
    id: 1,
    name: 'Second',
    theme: 'green',
    description: 'Second card description',
    avatarSrc: 'https://play-host.ru/images/adorable-cat-background-wallpaper-18607.jpg',
  },
  {
    id: 2,
    name: 'Third',
    theme: 'blue',
    description: 'Third card description',
    avatarSrc: 'https://play-host.ru/images/adorable-cat-background-wallpaper-18607.jpg',
  },
];

const App = React.memo(() => (
  <S.App>
    <S.Title>StyledComponents</S.Title>
    <S.CardsList>
      {CARDS_LIST.map(({id, name, description, avatarSrc, theme}) => (
        <S.Card key={id}>
          <S.CardAvatar src={avatarSrc} alt={name} />
          <S.CardName>{name}</S.CardName>
          <S.CardDescription>{description}</S.CardDescription>
          <Button theme={theme}>Click</Button>
        </S.Card>
      ))}
    </S.CardsList>
  </S.App>
));

export default App;
