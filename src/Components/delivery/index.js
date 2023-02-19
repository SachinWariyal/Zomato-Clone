import React from 'react'
import "./delivery.css"
import Filters from "../Common/filters"
import DeliveryCollections from './deliveryCollections'
import TopBrands from './topBrands'

const deliveryFilters=[
  {
    id:1,
    icon:<i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title:"Filters"
},
{
  id:2,
  title:"Rating 4.0+"
},
{
  id:3,
  title:"Safe and hygenic"
},
{
  id:4,
  title:"Veg and Non Veg"
},
{
  id:5,
  title:"Delivery time",
  icon:<i className="fi fi-sr-sort-alt absolute-center"></i>
},
{
  id:6,
  title:"Great Offers"
}
]

const Delivery = () => {
  return (
    <div>
      <div className="max-width">
      <Filters filterList={deliveryFilters}/>
      </div>
      <DeliveryCollections/>
      <TopBrands/>
    </div>
  );
}

export default Delivery
