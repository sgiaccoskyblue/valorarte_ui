import { FC } from 'react';
import Carousel from './HomeCarousel';
import Separator from './Separator';
import { Grid } from '@mui/material';
import Gallery from './Gallery';
import useStyles from './styles';
import Banner from './Banner';
import SlideInAnimation from 'components/SlideInAnimation';

const Home: FC = () => {
  const classes = useStyles();
  return (
    <div className='Home'>
      <Carousel></Carousel>
      <Separator></Separator>
      <Grid container>
        <Grid item xs={12} md={4}>
          <SlideInAnimation initialXValue={-500} delay={0}>
            <h2 className={classes.margin}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h2>
          </SlideInAnimation>
        </Grid>
        <Grid item xs={12} md={8}>
          <SlideInAnimation initialXValue={500} delay={0}>
            <p className={classes.margin}>
              Maecenas vel vestibulum nibh. Fusce sagittis, enim vel molestie rutrum, urna tortor
              rhoncus nibh, ut pellentesque erat nisl nec nulla. Curabitur at nisl nec augue
              scelerisque tempus. Donec tincidunt urna lectus, id viverra felis auctor eu. Proin
              nunc urna, imperdiet vel vulputate vitae, fermentum in nulla. Donec eu maximus odio.
              Maecenas hendrerit orci eget lacus porta, mattis ullamcorper mauris semper.Maecenas
              vel vestibulum nibh. Fusce sagittis, enim vel molestie rutrum, urna tortor rhoncus
              nibh, ut pellentesque erat nisl nec nulla. Curabitur at nisl nec augue scelerisque
              tempus. Donec tincidunt urna lectus, id viverra felis auctor eu. Proin nunc urna,
              imperdiet vel vulputate vitae, fermentum in nulla. Donec eu maximus odio. Maecenas
              hendrerit orci eget lacus porta, mattis ullamcorper mauris semper.
            </p>
          </SlideInAnimation>
        </Grid>
      </Grid>

      <SlideInAnimation initialXValue={0} delay={0}>
        <Gallery></Gallery>
      </SlideInAnimation>
      <div className={classes.textContainer}>
        <SlideInAnimation initialXValue={0} delay={0}>
          <h2 className={classes.text}>
            "Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit."
          </h2>
        </SlideInAnimation>
      </div>

      <Separator></Separator>
      <Banner></Banner>
    </div>
  );
};

export default Home;
