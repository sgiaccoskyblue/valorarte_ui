import { FC } from 'react';
import useStyles from './styles';
import Button from '@mui/material/Button';

const RoundedButton: FC = ({ children }) => {
  const classes = useStyles();
  return (
    <Button variant='contained' disableElevation className={classes.button}>
      {children}
    </Button>
  );
};
export default RoundedButton;
