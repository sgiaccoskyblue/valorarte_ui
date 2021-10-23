import { FC } from 'react';
import useStyles from './styles';
import costumes from 'assets/img/costumes.jpeg';
import RoundedButton from 'components/RoundedButton';

const Banner: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.imgContainer}>
      <img
        alt='banner'
        src={costumes}
        srcSet={costumes}
        loading='lazy'
        className={classes.img}
      ></img>
      <div className={classes.imgText}>
        <h3 className='text-white font-bold text-md'> Lorem ipsum SUA</h3>
        <RoundedButton>
          Visitar
        </RoundedButton>
      </div>
    </div>
  );
};
export default Banner;
