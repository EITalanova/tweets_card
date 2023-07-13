import { ButtonNav } from 'components/ButtonNav/ButtonNav';
import style from './style/Home.module.scss';

const Home = () => {
  return (
    <div className={style.homeContainer}>
      <ButtonNav path="/tweets" text="Go to tweets!" />
    </div>
  );
};

export default Home;
