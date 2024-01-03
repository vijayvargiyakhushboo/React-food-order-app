import './RestroCard.css';
const RestroCard = (props) => {
    const { name, cuisines, avgRating, areaName ,cloudinaryImageId} = props.resInfo.info;
        return (
            
            <div className="restroCard">
            
                     <img className="foodImage" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt="foodImg"/>
                     <div><h3>{name}</h3>
                      <h4>{avgRating}*</h4>
                      <h5>{cuisines.join(",")}</h5>
                      <h5>{areaName}</h5>
                      
                   </div>
            
            </div>
        )
    }

export default RestroCard;