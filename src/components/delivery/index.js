import React from 'react';
import { restaurants } from '../../data/restaurants';
import ExploreSection from '../common/exploreSection';
import Filters from '../common/filters';
import "./delivery.css";
import DeliveryCollections from './deliveryCollections';
import TopBrands from './topBrands';


const deliveryFilters=[
    {
        id:1,
        icon: <i className="fa fa-filter absolute-center" aria-hidden="true"></i>,
        title: "Filters",
    },
    {
        id:2,
        title: "Rating 4.0",
    },
    {
        id:3,
        title: "Safe and Hygienic",
    },
    {
        id:4,
        title: "Pure Veg",
    },
    {
        id:5,
        icon:<i class="fa fa-long-arrow-down" aria-hidden="true"></i>,
        title: "Delivery Time",
    },
    {
        id:6,
        title: "Great offers",
    },
];

const restaurantList=restaurants;
const Delivery = () =>{ 
    return(
     <div>
      <div className='max-width'>
        <Filters filterList={deliveryFilters} />
      </div>
      <DeliveryCollections/>
      <TopBrands/>
      <ExploreSection List={restaurantList} collectionName='Delivery Restaurants in Konanunte, Bangalore'/>
    </div>
);
};

export default Delivery;
