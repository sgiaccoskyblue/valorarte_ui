import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';

const Header = () => {
  return (
    <React.Fragment>
      <Toolbar sx={{ bgcolor: 'black', borderBottom: 1 }}>
        <Typography color='white'>VALORARTE</Typography>
        <div style={{ flex: 1 }}></div>
        <Box mx={2}>
          <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
            CASTING
          </Link>
        </Box>
        <Box mx={2}>
          <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
            NOSOTROS
          </Link>
        </Box>
        <Box mx={2}>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <Button
              size='small'
              variant='contained'
              disableElevation
              sx={{ bgcolor: 'darkviolet', color: 'white', borderRadius: '30px', paddingX: '30px' }}
            >
              Ingresar
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </React.Fragment>
  );
};

export default Header;
