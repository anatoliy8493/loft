import React from 'react';

import './style.sass';
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

const App = React.memo(() => {
  return (
    <div className="app">
      <p className="title">BemSass</p>
      <div className="cards-list">
        {CARDS_LIST.map(({id, name, description, avatarSrc, theme}) => (
          <div className="card" key={id}>
            <img className="card__avatar" src={avatarSrc} alt={name} />
            <div className="card__name">{name}</div>
            <div className="card__description">{description}</div>
            <Button theme={theme}>Click</Button>
          </div>
        ))}
      </div>
    </div>
  );
});

export default App;
