import React from 'react'
import Slider from 'react-slick';
import NextArrow from '../../Common/carousal/nextArrow';
import PrevArrow from '../../Common/carousal/previousArrow';
import "./deliveryCollections.css"
import DeliveryItem from './deliveryItem';


const deliveryItems=[
    {
        id:1,
        title:"Burger",
        cover:"https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
},
    {
        id:2,
        title:"Chaat",
      cover:"https://b.zmtcdn.com/data/dish_images/1437bc204cb5c892cb22d78b4347f4651634827140.png"
},
    {
        id:3,
        title:"Cake",
        cover:"https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png"
},
    {
        id:4,
        title:"Sandwich",
        cover:"https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png"
},
    {
        id:5,
        title:"Biriyani",
        cover:"https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png"
},
    {
        id:6,
        title:"Momos",
        cover:"https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png"
},
    {
        id:7,
        title:"Noodles",
        cover:"https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png"
},
    {
        id:8,
        title:"Milkshakes",
        cover:"https://b.zmtcdn.com/data/o2_assets/388b54022a15f68d42515a824547db6c1632716604.png"
},
    {
        id:9,
        title:"Fries",
        cover:"https://b.zmtcdn.com/data/o2_assets/13bdf0d4c96d44e6ddb21fedde0fe4081632716661.png"
},
    {
        id:10,
        title:"Pizza",
        cover:"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
},
    {
        id:11,
        title:"Pizza",
        cover:"https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
},
    {
        id:12,
        title:"Ice Cream",
        cover:"https://b.zmtcdn.com/data/o2_assets/4c7697178c268c50e1b1641fca205c231634401116.png"
}
]

const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow:<NextArrow/>,
    PreviousArrow:<PrevArrow/>
  };

const DeliveryCollections = () => {
  return (
    <div className='delivery-collection'>
        <div className="max-width">
            <div className='collection-title'>Eat what makes you happy</div>
            <Slider{...settings}>
            {deliveryItems.map((item)=>{
                return <DeliveryItem  item={item}/>
            })}</Slider>
        </div>

    </div>
  )
}

export default DeliveryCollections
