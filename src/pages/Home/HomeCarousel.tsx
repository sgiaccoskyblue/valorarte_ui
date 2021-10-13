import { Carousel } from 'react-carousel-minimal';
import './HomeCarousel.css';

function HomeCarousel() {
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
      <div style={{ textAlign: 'center' }}>
        <div>
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
            style={{
              textAlign: 'center',
              margin: 'auto',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default HomeCarousel;
