import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  imgTitle: {
    position: 'absolute',
    top: '200px',
    width: '100%',
    textAlign: 'center',
    color: 'white',
    opacity: 0,
    fontSize: 'xx-large',
    cursor: 'pointer',
    transitionDuration: '500ms',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  imgWrapper: {
    overflow: 'hidden !important',
    width: '100% !important',
    height: '400px !important',
    '&:hover img': {
      transform: 'scale(1.1)',
      transitionDuration: '2s',
    },
    '&:hover div': {
      opacity: 1,
      transitionDuration: '500ms',
    },
  },
  img: {
    transitionDuration: '1s',
  },
  title: { width: '100%', textAlign: 'center' },
});

export default useStyles;
