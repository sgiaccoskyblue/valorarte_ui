import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: 'black',
  },
  logo: {
    fontFamily: 'Work Sans, sans-serif',
    fontWeight: 600,
    color: '#FFFEFE',
    textAlign: 'left',
  },
  menuButton: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 700,
    size: '18px',
    marginLeft: '38px',
  },
  toolbar: {
    display: 'flex',
    backgroundColor: 'black',
    justifyContent: 'space-between',
  },
  drawerContainer: {
    padding: '20px 30px',
    backgroundColor: 'black',
    height: '100%',
  },
  drawerChoices: { textDecoration: 'none', color: 'white' },
}));

export default useStyles;
