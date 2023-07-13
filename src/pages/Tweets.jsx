import { useSelector } from 'react-redux';
import { selectPage } from 'redux/users/usersSelector';

import { CardList } from 'components/CardList/CardList';
import { ButtonNav } from 'components/ButtonNav/ButtonNav';
import { Filter } from 'components/Filter/Filter';
import { Pagination } from 'components/Pagination/Pagination';

import style from './style/Tweets.module.scss';

const Tweets = () => {
  const limitCards = 12;
  const limitCardsPage = 3;

  const page = useSelector(selectPage);

  const showPagination = page < limitCards / limitCardsPage;

  return (
    <div className={style.tweetsContainer}>
      <ButtonNav path="/" text="Back" />
      <Filter />
      <CardList />
      {showPagination && <Pagination />}
    </div>
  );
};

export default Tweets;
