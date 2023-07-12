import { Button } from 'components/Button/Button';

import Avatar from '../../assets/images/Hansel.png';


import style from './Card.module.css';

export const Card = ({user}) => {
  const { avatar, tweets, followers } = user;
  return (
    <div className={style.card}>
      <div className={style.cardContent}>
        <img className={style.cardAvatar} src={user.avatar} alt="avatar" />
        <div className={style.cardText}>
          <p className={style.cardTweeets}>{`${tweets} tweets`}</p>
          <p className={style.cardFollowers}>{`${followers} followers`}</p>
        </div>
        <Button text='Follow'/>
      </div>
    </div>
  );
};
