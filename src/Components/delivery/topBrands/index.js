import React from 'react'
import Slider from 'react-slick';
import NextArrow from '../../Common/carousal/nextArrow';
import PrevArrow from '../../Common/carousal/previousArrow';
import './topBrands.css'

const topBrandList=[
    {
        id:1,
        title:"Meghana Foods",
        time: "22 mins",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/ec72c289aa01d947fe15a009ce8e559f_1616052816.png?output-format=webp"
    },
    {
        id:2,
        title:"Empire Restaurant",
        time: "25 mins",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/7a7904eff687a7456599074a4e7d2335_1617875100.png?output-format=webp"
    },
    {
        id:3,
        title:"McDonald's",
        time: "16 mins",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/3d80cb89fca9e212f7dab2c1914ebd8f_1643983621.png?output-format=webp"
    },
    {
        id:4,
        title:"Fresh Menu",
        time: "26 mins",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/dc49d77dce0ee7fc8e495fa35be0e747_1648715086.png?output-format=webp"
    },
    {
        id:5,
        title:"KFC",
        time: "24 mins",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617875125.png?output-format=webp"
    },
    {
        id:6,
        title:"Chaayos Chai+Snacks=Relax",
        time: "22 mins",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/ed9718e64b3307ae4aaee0bc81c1ea15_1625155163.png?output-format=webp"
    },
    {
        id:7,
        title:"Pizza Hut",
        time: "28 mins",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/9742d760cf95e9dbf9b869ca9c753f8f_1613210633.png?output-format=webp"
    },
    {
        id:8,
        title:"Burger King",
        time: "22 mins",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187721.png?output-format=webp"
    },
];
const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow:<NextArrow/>,
    PreviousArrow:<PrevArrow/>
  };
const TopBrands = () => {
  return (
    <div className='top-brands max-width'>
        <div className="collection-title">Top brands for you</div>
        <Slider {...settings}>
            {topBrandList.map((brand)=>{
                return <div>
                    <div className="top-brands-cover">
                        <img src={brand.cover} alt={brand.title} className='top-brands-image' />
                    </div>
                    <div className="brand-name max-width">{brand.title}</div>
                    <div className="delivery-time">{brand.time}</div>
                </div>
            })}
        </Slider>
    </div>
  )
}

export default TopBrands
