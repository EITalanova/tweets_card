import { selectPage } from 'redux/users/usersSelector';
import { useSelector } from 'react-redux';

import { CardList } from 'components/CardList/CardList';
import { ButtonNav } from 'components/ButtonNav/ButtonNav';
import { Pagination } from 'components/Pagination/Pagination';

import style from './style/Tweets.module.scss';

const Tweets = () => {
  const page = useSelector(selectPage);
  const showPagination = page < 4;

  return (
    <div className={style.tweetsContainer}>
      <ButtonNav path="/" text="Back" />
      <CardList />
      {showPagination && <Pagination />}
    </div>
  );
};

export default Tweets;
