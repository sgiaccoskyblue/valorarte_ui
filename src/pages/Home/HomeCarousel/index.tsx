import { FC } from 'react';
import { Carousel } from 'react-carousel-minimal';
import './HomeCarousel.css';
import useStyles from './styles';

const HomeCarousel: FC = () => {
  const classes = useStyles();

  const data = [
    {
      image: 'https://wallpapercave.com/wp/wp3188318.jpg',
    },
    {
      image: 'https://wallpapercave.com/wp/wp3188319.jpg',
    },
  ];

  return (
    <div className='HomeCarousel'>
      <div className={classes.carouselContainer}>
        <Carousel
          data={data}
          time={2000}
          width='100%'
          height='100vh'
          captionPosition='bottom'
          automatic={true}
          dots={true}
          pauseIconColor='white'
          pauseIconSize='40px'
          slideBackgroundColor='darkgrey'
          slideImageFit='cover'
          className={classes.carousel}
        />
      </div>
    </div>
  );
};

export default HomeCarousel;
