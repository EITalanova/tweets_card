import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';



import {
  selectPage,
  selectUsers,
  selectFilter,
} from '../../redux/users/usersSelector';
import { fetchUsers } from '../../redux/users/usersThunk';

import { Card } from '../Card/Card';

import style from './CardList.module.scss';

export const CardList = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const page = useSelector(selectPage);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchUsers(page));
  }, [dispatch, page, filter]);

  let filteredUsers;

  switch (filter) {
    case 'followings':
      filteredUsers = users.filter(user => user.isFollow);
      break;

    case 'follow':
      filteredUsers = users.filter(user => !user.isFollow);
      break;

    case 'show all':
      filteredUsers = users;
      break;
    
    default:
      filteredUsers = users;
  }

  return (
    <>
      {filteredUsers && (
        <ul className={style.cardList}>
          {filteredUsers.map(user => (
            <Card user={user} key={user.id} />
          ))}
        </ul>
      )}
    </>
  );
};
