import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Menu from '@mui/icons-material/Menu';
import useStyles from './styles';

const headersData = [
  {
    label: 'Casting',
    href: '/casting',
  },
  {
    label: 'Nosotros',
    href: '/nosotros',
  },
  {
    label: 'Ingresar',
    href: '/ingresar',
  },
];

export default function Header() {
  const { header, logo, menuButton, toolbar, drawerContainer, drawerChoices } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState(prevState => ({ ...prevState, mobileView: true }))
        : setState(prevState => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener('resize', () => setResponsiveness());

    return () => {
      window.removeEventListener('resize', () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {valorarteLogo}
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () => setState(prevState => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () => setState(prevState => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar className={header}>
        <IconButton
          {...{
            edge: 'start',
            color: 'inherit',
            'aria-label': 'menu',
            'aria-haspopup': 'true',
            onClick: handleDrawerOpen,
          }}
        >
          <Menu />
        </IconButton>

        <Drawer
          {...{
            anchor: 'left',
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>

        <div>{valorarteLogo}</div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          {...{
            to: href,
            color: 'inherit',
            className: drawerChoices,
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  const valorarteLogo = (
    <Typography variant='h6' component='h1' className={logo}>
      Valorarte
    </Typography>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: 'inherit',
            to: href,
            className: menuButton,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return <AppBar>{mobileView ? displayMobile() : displayDesktop()}</AppBar>;
}
