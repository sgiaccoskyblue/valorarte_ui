import { FC } from 'react';
import Carousel from './HomeCarousel';
import Separator from './Separator';
import { Grid } from '@mui/material';
import Gallery from './Gallery';
import useStyles from './styles';
import Banner from './Banner';

const Home: FC = () => {
  const classes = useStyles();
  return (
    <div className='Home'>
      <Carousel></Carousel>
      <Separator></Separator>
      <Grid container>
        <Grid item xs={12} md={4}>
          <h2 className={classes.margin}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
          </h2>
        </Grid>
        <Grid item xs={12} md={8}>
          <p className={classes.margin}>
            Maecenas vel vestibulum nibh. Fusce sagittis, enim vel molestie rutrum, urna tortor
            rhoncus nibh, ut pellentesque erat nisl nec nulla. Curabitur at nisl nec augue
            scelerisque tempus. Donec tincidunt urna lectus, id viverra felis auctor eu. Proin nunc
            urna, imperdiet vel vulputate vitae, fermentum in nulla. Donec eu maximus odio. Maecenas
            hendrerit orci eget lacus porta, mattis ullamcorper mauris semper.Maecenas vel
            vestibulum nibh. Fusce sagittis, enim vel molestie rutrum, urna tortor rhoncus nibh, ut
            pellentesque erat nisl nec nulla. Curabitur at nisl nec augue scelerisque tempus. Donec
            tincidunt urna lectus, id viverra felis auctor eu. Proin nunc urna, imperdiet vel
            vulputate vitae, fermentum in nulla. Donec eu maximus odio. Maecenas hendrerit orci eget
            lacus porta, mattis ullamcorper mauris semper.
          </p>
        </Grid>
      </Grid>
      <Gallery></Gallery>
      <div className={classes.textContainer}>
        <h2 className={classes.text}>
          "Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit."
        </h2>
      </div>
      <Separator></Separator>
      <Banner></Banner>
    </div>
  );
};

export default Home;
