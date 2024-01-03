
import { restraObj } from '../mock-data/restro-list';
import RestroCard from './RestroCard';
import './RestroCard.css';

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="restro-container">
                { restraObj.map(resData =>  <RestroCard key={resData.info.id} resInfo={resData} /> )
                }
            
            </div>
            </div>
    )
}
export default Body;