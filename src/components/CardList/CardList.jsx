import { selectUsers } from 'redux/usersSelector';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { fetchUsers } from 'redux/usersThunk';

import { Card } from 'components/Card/Card';

import style from './CardList.module.css'

export const CardList = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  console.log(users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      {users && (
        <ul className={style.cardList}>
          {users.map(user => (
            <Card user={user} key={user.id} />
          ))}
        </ul>
      )}
    </>
  );
};
