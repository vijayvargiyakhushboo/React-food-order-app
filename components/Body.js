
import { restraObj } from '../mock-data/restro-list';
import RestroCard from './RestroCard';
import './RestroCard.css';
import { useState } from 'react';

const Body = () => {
    [searchString, setSearchString] = useState("");
    [filterData, setFilterData] = useState(restraObj);
    const getFilter = () => {
        setFilterData(restraObj.filter((item) => item.info.name.includes(searchString)))
        console.log("KV: ",filterData);
    }
    const getTopRated = () => {
        setFilterData( restraObj.filter((res) => res.info.avgRating > 4))
    }
    return (
        <div className="body">
           <input type="text" className='searchText' id="search-text" value={searchString} onChange={(event) => setSearchString(event.target.value) } />
                <div><button onClick={getFilter}>Search</button></div>
                <div><button onClick={getTopRated}>Top Rated Restraunts</button></div>
           
            <div className="restro-container">
                
                {
                 filterData.map(resData =>  <RestroCard key={resData.info.id} resInfo={resData} /> )
                }
            
            </div>
            </div>
    )
}
export default Body;