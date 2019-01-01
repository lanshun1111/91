import React from 'react'
import { Carousel } from 'antd-mobile';

const Com = ({bannerlist}) => {
  return (
    <Carousel
      autoplay={ true }
      infinite
    >
      {bannerlist.map((item, index) => (
        <div
          key={ index }
          style={{ display: 'inline-block', width: '100%', height: '180px' }}
        >
          <img
            src={ item.imagePath }
            alt=""
            style={{ width: '100%', verticalAlign: 'top', height: '180px' }}
            onLoad={() => {
              window.dispatchEvent(new Event('resize'));
            }}
          />
        </div>
      ))}
    </Carousel>
  );
}

export default Com
