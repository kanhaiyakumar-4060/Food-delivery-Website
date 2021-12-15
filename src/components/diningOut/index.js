import React from 'react';
import Filters from '../common/filters';
import { diningOut } from '../../data/diningOut';
import Collection from '../common/collection';
import "./diningOut.css";
import ExploreSection from '../common/exploreSection';



const collectionList=[
    {
        id:"1",
        title:"Newly Opened",
        cover:"https://b.zmtcdn.com/data/collections/b22194cb38ed18a5200b387ad8f243f0_1582015769.jpg",
        places:"9 Places"
    },
    {
        id:"2",
        title:"Best Of Bengaluru",
        cover:"https://b.zmtcdn.com/data/collections/53be5a745e959a8f6c51c52dd3d9edd1_1536825795.jpg",
        places:"120 Places"
    },
    {
        id:"2",
        title:"Christmas Specials",
        cover:"https://b.zmtcdn.com/data/collections/cda5618a6026b24d107c01c0a8c9e332_1608708052.jpg",
        places:"6 Places"
    },
    {
        id:"2",
        title:"New Year's Specials",
        cover:"https://b.zmtcdn.com/data/collections/26ac80f30915c30cb315afcdcf067fe6_1608708104.jpg",
        places:"7 Places"
    },
    {
        id:"3",
        title:"Trending This Week",
        cover:"https://b.zmtcdn.com/data/collections/1b8c164e8a18878468d8aabeb0b486b1_1625812715.jpg",
        places:"25 Places",
    },
    {
        id:"4",
        title:"Royal Rajasthani Cuisine",
        cover:"https://b.zmtcdn.com/data/collections/3c93a643c4d0e43a599c56e4c5887c28_1614943766.jpg",
        places:"11 Places",
    },
    {
        id:"5",
        title:"Sweet Tooth",
        cover:"https://b.zmtcdn.com/data/collections/8475397d26a71d08e02b03c00eb7934c_1615540920.jpg",
        places:"12 Places",
    },
    {
        id:"6",
        title:"Must visit Jodhpur restaurant",
        cover:"https://b.zmtcdn.com/data/collections/148d9accc60cf620f4781ae1d9a1eb4c_1528280845.jpg",
        places:"11 Places",
    },
    {
        id:"7",
        title:"Meat Cravings",
        cover:"https://b.zmtcdn.com/data/collections/bb455325350e11bff99e88ef68b3f89d_1614940676.jpg",
        places:"20 Places",
    },
    {
        id:"8",
        title:"Rooftops",
        cover:"https://b.zmtcdn.com/data/collections/14fa741ee65b838680a95a4cd7b9faa4_1582201565.jpg",
        places:"10 Places",
    },
    {
        id:"9",
        title:"Legendary Outlets",
        cover:"https://b.zmtcdn.com/data/collections/2683237a53944cfd9801c2fabd5cdf32_1582082375.jpg",
        places:"9 Places",
    },
    {
        id:"10",
        title:"Great Buffets",
        cover:"https://b.zmtcdn.com/data/collections/1c0daad79bed143d6a59f67efb6fe196_1535355063.jpg",
        places:"11 Places",
    },
    {
        id:"11",
        title:"Best Bars & Pubs",
        cover:"https://b.zmtcdn.com/data/collections/420f473015c7d64962b60bb355828192_1613380120.jpg",
        places:"14 Places",
    },
    {
        id:"12",
        title:"Best Pizza Places In Towns",
        cover:"https://b.zmtcdn.com/data/collections/99384005af05393bad27980abd0ef3ee_1618993177.jpg",
        places:"11 Places",
    },
    
];

const diningFilters=[
    {
        id:1,
        icon: <i class="fa fa-sliders absolute-center" aria-hidden="true"></i>,
        title: "Filters",
    },
    {
        id:2,
        icon: <i class="fa fa-arrows-v absolute-center" aria-hidden="true"></i>,
        title: "Distance",
    },
    {
        id:2,
        title: "Rating: 4.0+",
    },
    {
        id:3,
        title: "Online bookings",
    },
    {
        id:4,
        icon:<i class="fa fa-arrow-down absolute-center" aria-hidden="true"></i>,
        title: "Cuisines",
    },
    {
        id:5,
        icon:<i class="fa fa-arrow-down absolute-center" aria-hidden="true"></i>,
        title: "Pro Offers",
    },
    {
        id:6,
        title: "Outdoor Seating",
    },
    {
        id:6,
        title: "Serves Alcohol",
    },
    {
        id:6,
        title: "Pure Veg",
    },
    {
        id:6,
        title: "Open Now",
    },
    {
        id:5,
        icon:<i class="fa fa-arrow-down absolute-center" aria-hidden="true"></i>,
        title: "More filters",
    },
    {
        id:6,
        title: "Cafes",
    },
];

const diningList = diningOut;
const DiningOut = () => {
    return (
        <div>
            <Collection list={collectionList}/>
            <div className='max-width'>
                <Filters filterList={diningFilters} />
            </div>
            <ExploreSection List={diningList}
            collectionName='Dine-Out Restaurants in Konanunte, Bangalore'/>
        </div>
    );
};

export default DiningOut;
