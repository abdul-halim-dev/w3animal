 
 import { FaRegUser, FaUsers } from 'react-icons/fa'
 import { Link } from 'react-router-dom';

const FeatureCard = () => {

    const featuresPostInfo = {
        id:1,
        uId:"/2",
        imageLink:"/src/data/img/bird/bird2.avif",
        title:"Lorem ipsum dolor sit amet consectetur adipisicing elit....",
        decs:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit....",
        auth:"admin",
        click:"120k"
    }


    return (
         
        <Link to={`/singlepost${featuresPostInfo.uId}`}className="features_card_wrapper">
        
        <div className="feature_main_card">

       
        <div className="image_box learge_box">
            <img src={`http://localhost:5173${featuresPostInfo.imageLink}`} alt="" />
        </div>
        <div className="post-auth-info">
            <span><FaRegUser/>{featuresPostInfo.auth}</span>
            <span><FaUsers /> {featuresPostInfo.click}</span>
        </div>
        <div className="post-info">
            <h2>{featuresPostInfo.title}</h2>
            <p>{featuresPostInfo.decs}</p>
        </div>
        </div>
    </Link>


    );
};

export default FeatureCard;