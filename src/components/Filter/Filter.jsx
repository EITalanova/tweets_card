import { useDispatch } from 'react-redux';

import { selectFilter } from 'redux/users/usersSelector';
import { useSelector } from 'react-redux';

import { setFilter } from 'redux/users/usersSlice';

import style from './Filter.module.scss';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <select className={style.filter} onChange={handleFilter} defaultValue={filter}>
      <option className={style.filterOption} value="show all">
        show all
      </option>
      <option className={style.filterOption} value="follow">
        follow
      </option>
      <option className={style.filterOption} value="followings">
        followings
      </option>
    </select>
  );
};
