import { useDispatch } from 'react-redux';

import { setFilter } from 'redux/users/usersSlice';

import style from './Filter.module.scss'

export const Filter = () => {
    const dispatch = useDispatch();

    const handleFilter = (e) => {
        dispatch(setFilter(e.target.value));
        console.log(e.target.value);
}

    return (
        <select className={style.filter} onChange={handleFilter}>
            <option className={style.filterOption} value="show all">show all</option>
            <option className={style.filterOption} value="follow">follow</option>
            <option className={style.filterOption} value="followings">followings</option>
   </select>
    )
}