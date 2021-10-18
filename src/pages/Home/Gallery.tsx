import * as React from 'react';
import { Grid } from '@mui/material';
import ImageListItem from '@mui/material/ImageListItem';
import ballet from '../../img/ballet.jpeg';
import cameraman from '../../img/cameraman.jpeg';
import saxo from '../../img/saxo.webp';
import shooting from '../../img/shooting.jpeg';
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

export default function Gallery() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.title}>
        <h2>Lorem ipsum</h2>
      </div>
      <Grid container>
        {itemData.map(item => (
          <Grid item xs={12} md={3} key={item.img}>
            <ImageListItem className={classes.imgWrapper}>
              <img
                data-hover={item.title}
                src={item.img}
                srcSet={item.img}
                alt={item.title}
                loading='lazy'
                className={classes.img}
              />
              <div className={classes.imgTitle}>{item.title}</div>
            </ImageListItem>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
const itemData = [
  {
    img: ballet,
    title: 'Bailarines',
  },
  {
    img: saxo,
    title: 'Músicos',
  },
  {
    img: cameraman,
    title: 'Técnicos',
  },
  {
    img: shooting,
    title: 'Otros',
  },
];
