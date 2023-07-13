import { selectPage, selectUsers } from 'redux/users/usersSelector';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { fetchUsers } from 'redux/users/usersThunk';

import { Card } from 'components/Card/Card';

import style from './CardList.module.css'
import { useState } from 'react';

export const CardList = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const page = useSelector(selectPage);

  console.log(users);
  useEffect(() => {
    dispatch(fetchUsers(page));
  }, [dispatch, page]);



  return (
    <>
      {users && users.length > 0 &&(
        <ul className={style.cardList}>
          {users.map(user => (
            <Card user={user} key={user.id} />
          ))}
        </ul>
      )}
    </>
  );
};
