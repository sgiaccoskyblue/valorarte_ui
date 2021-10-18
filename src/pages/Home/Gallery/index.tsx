import { FC } from 'react';
import { Grid } from '@mui/material';
import ImageListItem from '@mui/material/ImageListItem';
import ballet from 'assets/img/ballet.jpeg';
import cameraman from 'assets/img/cameraman.jpeg';
import saxo from 'assets/img/saxo.webp';
import shooting from 'assets/img/shooting.jpeg';
import useStyles from './styles';

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

const Gallery: FC = () => {
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
};

export default Gallery;
