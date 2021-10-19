import { FC } from 'react';
import useStyles from './styles';

const Separator: FC = () => {
  const { separator } = useStyles();

  return <div className={separator}></div>;
};

export default Separator;
