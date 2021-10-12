import React from 'react';
import Carousel from './Carousel';
import Separator from './Separator';
import { Grid } from '@mui/material';

function Home() {
  return (
    <div className='Home'>
      <Carousel></Carousel>
      <Separator></Separator>
      <Grid container>
        <Grid item xs={12} md={4}>
          <h2 style={{ margin: '60px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
          </h2>
        </Grid>
        <Grid item xs={12} md={8}>
          <p style={{ margin: '60px' }}>
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
      <div style={{ width: '100%', textAlign: 'center' }}>
        <h2>Lorem ipsum</h2>
      </div>
    </div>
  );
}

export default Home;
