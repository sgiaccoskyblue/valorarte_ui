import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  img: {
    width: '100%',
    height: '100%',
  },
  imgContainer: {
    position: 'relative',
    textAlign: 'center',
    width: '100%',
    overflow: 'hidden',
    display: 'flex',
  },
  imgText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    display: 'flex',
    height: '80px',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
});

export default useStyles;
