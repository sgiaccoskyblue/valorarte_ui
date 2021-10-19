import { FC } from 'react';
import useStyles from './styles';
import costumes from 'assets/img/costumes.jpeg';
import Button from '@mui/material/Button';

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
        <h3> Lorem ipsum SUA</h3>
        <Button variant='contained' disableElevation className={classes.button}>
          Visitar
        </Button>
      </div>
    </div>
  );
};
export default Banner;
