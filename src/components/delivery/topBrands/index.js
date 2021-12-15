import React from 'react';
import Slider from 'react-slick';
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import "./topBrands.css";

const topBrandList = [
    {
        id:1,
        time:"33 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/2aa77cff41af7cdb4ec59574d238f78e_1575883799.png"
    },
    {
        id:2,
        time:"36 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/874c2b2b4554f4aed7dd3bb4e755c420_1604387296.png"
    },
    {
        id:3,
        time:"38 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188142.png"
    },
    {
        id:4,
        time:"28 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png"
    },
    {
        id:5,
        time:"23 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/bd13f9119a336c32432c679ec6737a32_1609220205.png"
    },
    {
        id:6,
        time:"35 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433322.png"
    },
    {
        id:7,
        time:"44 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/f6f779024f5f34469381413bbbddbcbc_1617920260.png"
    },
    {
        id:8,
        time:"35 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/9fd44dce68f59d5a4f63e7c426c4c282_1605106153.png"
    },
    {
        id:9,
        time:"38 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/334fc7a8dcd2b4b921c0779c21c43655_1628325065.png"
    },
    {
        id:10,
        time:"44 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/600a6fd7f7d219da6ae759b6181127a3_1633121604.png"
    },
];
const settings = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>
  };

const TopBrands = () => {
    return (
        <div className='top-brands max-width'>
          <div className='collection-title'>Top brands for you</div>
          <Slider {...settings}>
            {topBrandList.map((brand)=>{
                return <div>
                    <div className='top-brands-cover'>
                     <img src={brand.cover} className='top-brands-image' alt={brand.time} />
                    </div>
                </div>
            })}
          </Slider>
        </div>
    )
}

export default TopBrands;
