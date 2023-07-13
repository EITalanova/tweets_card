import { useDispatch } from 'react-redux';

import { increasePage } from 'redux/users/usersSlice';

import { ButtonNav } from 'components/ButtonNav/ButtonNav';

export const Pagination = () => {
  const dispatch = useDispatch();
  const handleLoadMore = () => {
    dispatch(increasePage());
  };

  return <ButtonNav onClick={handleLoadMore} text="Load more" />;
};
