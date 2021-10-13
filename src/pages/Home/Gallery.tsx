import * as React from 'react';
import { Grid } from '@mui/material';
import ImageListItem from '@mui/material/ImageListItem';
import ballet from '../../img/ballet.jpeg';
import cameraman from '../../img/cameraman.jpeg';
import saxo from '../../img/saxo.webp';
import shooting from '../../img/shooting.jpeg';
import './Gallery.css';
export default function Gallery() {
  return (
    <>
      <div style={{ width: '100%', textAlign: 'center' }}>
        <h2>Lorem ipsum</h2>
      </div>
      <Grid container>
        {itemData.map(item => (
          <Grid item xs={6} md={3}>
            <ImageListItem
              key={item.img}
              style={{ overflow: 'hidden', width: '100%', height: '400px' }}
              className='img-wrapper'
            >
              <img
                data-hover={item.title}
                src={item.img}
                srcSet={item.img}
                alt={item.title}
                loading='lazy'
                className='hover-zoom'
              />
              <div
                className='img-title'
              >
                {item.title}
              </div>
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
