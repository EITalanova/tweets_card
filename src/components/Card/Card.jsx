import cn from 'classnames';

import { useDispatch } from 'react-redux';
import { updateUser } from 'redux/users/usersThunk';
import { handleNumber } from 'utils/handleNumber';

import { ReactComponent as Elips } from '../../assets/svg/elips.svg';
import { ReactComponent as Line } from '../../assets/svg/line.svg';


import style from './Card.module.scss';

export const Card = ({ user }) => {
  const { id, isFollow, avatar, tweets, followers } = user;
  const dispatch = useDispatch();
  const setFollowers = isFollow ? followers - 1 : followers + 1;
  const setIsFollow = !isFollow;

  const handleFollowers = () => {
    dispatch(
      updateUser({
        id,
        updateData: { followers: setFollowers, isFollow: setIsFollow },
      })
    );
  };

  return (
    <div className={style.card}>
      <div className={style.cardContent}>
        <Line className={style.imgLine} />
        <Elips className={style.imgElips}/>
        <img className={style.cardAvatar} src={avatar} alt="avatar" />
        <div className={style.cardText}>
          <p className={style.cardTweeets}>{`${tweets} tweets`}</p>
          <p className={style.cardFollowers}>{`${handleNumber(
            followers
          )} followers`}</p>
        </div>
        <button
          className={cn(
            style.btn,
            !setIsFollow ? style.btnActive : style.btnNotActive
          )}
          onClick={handleFollowers}
        >
          {!setIsFollow ? 'Following' : 'Follow'}
        </button>
      </div>
    </div>
  );
};
