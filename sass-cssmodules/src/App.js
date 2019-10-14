import React from 'react';

import styles from './App.sass';
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
    <div className={styles.app}>
      <p className={styles.title}>SASS Css Modules</p>
      <div className={styles.cardsList}>
        {CARDS_LIST.map(({id, name, description, avatarSrc, theme}) => (
          <div className={styles.card} key={id}>
            <img className={styles.cardAvatar} src={avatarSrc} alt={name} />
            <div className={styles.cardName}>{name}</div>
            <div className={styles.cardDescription}>{description}</div>
            <Button theme={theme}>Click</Button>
          </div>
        ))}
      </div>
    </div>
  );
});

export default App;
