import React from 'react';
import { nightlife } from '../../data/nightlife';
import Collection from '../common/collection';
import ExploreSection from '../common/exploreSection';
import Filters from '../common/filters';
import "./nightlife.css";

const nightFilters=[
    {
        id:1,
        icon: <i class="fa fa-sliders absolute-center" aria-hidden="true"></i>,
        title: "Filters",
    },
    {
        id:2,
        title: "Pro-Offers",
        icon: <i class="fa fa-angle-down absolute-center" aria-hidden="true"></i>,
    },
    {
        id:3,
        title: "Distance",
        icon:<i class="fa fa-long-arrow-up absolute-center" aria-hidden="true"></i>,
    },
    {
        id:4,
        title: "Rating 4.0+",
    },
    {
        id:5,
        title: "Pubs & bars",
    },
];

const collectionList=[
    {
        id:"1",
        title:"Microbreweries",
        cover:"https://b.zmtcdn.com/data/collections/df4ccbf9f6b6db21b07d12a18577b5af_1582106658.jpg",
        places:"30 Places"
    },
    {
        id:"2",
        title:"Best Bars & Pubs",
        cover:"https://b.zmtcdn.com/data/collections/420f473015c7d64962b60bb355828192_1613380120.jpg",
        places:"31 Places",
    },
    {
        id:"3",
        title:"Aatisan Cocktails",
        cover:"https://b.zmtcdn.com/data/collections/42e666d436d9a3b90431e6cc4a6b242d_1582106525.jpg",
        places:"12 Places",
    },
    {
        id:"4",
        title:"Where's The Party",
        cover:"https://b.zmtcdn.com/data/collections/b05dc8713287671124d8408fb6198bb3_1631608443.jpg",
        places:"11 Places",
    },
    {
        id:"5",
        title:"Bars-gains",
        cover:"https://b.zmtcdn.com/data/collections/4e1df9d915b25858fbc9acd2154d1dff_1631511179.jpg",
        places:"18 Places",
    },
];
const nightList=nightlife;
const Nightlife = () => {
    return (
        <div>
            <Collection list={collectionList}/> 
            <div className='max-width'>
              <Filters filterList={nightFilters}/>
            </div>
            <ExploreSection List={nightList} collectionName='Nightlife Restaurants in Konanunte, Bangalore'/>
        </div>
    );
};

export default Nightlife;
