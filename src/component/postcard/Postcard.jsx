import { Link, useParams } from "react-router-dom";
import { FaRegUser, FaUsers } from 'react-icons/fa'
 

{/* <Postcard key={ item.id} info={item}/> */}

const Postcard = ({cardInfo} ) => {
 
    return (
       
        <Link to={`/singlepost/${cardInfo.id}`} className="singlePost"> 
         <div className="image_box">
         <img src={cardInfo.img} alt="" />
         </div>
        
        <div className="post_infos">
        <span><FaRegUser/>admin</span>
        <span><FaUsers /> 140k</span>
        </div>
        <div className="post_info">
        <h2>{cardInfo.title.substring(0, 30)}....</h2>
        <p>{cardInfo.decs.substring(0, 200)}....</p>
        </div>
            </Link>

 

    );
};

export default Postcard;