import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaUsers, FaRegUser } from "react-icons/fa"
 

 

const Singlepost = () => {

    const pId = useParams();

const [postData, setPostData] = useState([ ]);

useEffect( ()=>{
    window.scrollTo(0,0);
    const singlePost = async ()=>{

        try {
            const res = await axios.get("http://localhost:5173/src/data/datajson/Data.json");
            setPostData(res.data.filter((item)=>item.id == pId.postId))
              
        } catch (error) {
            console.log(error)
        }
           


        
    }

    singlePost()
} , [ ])

 

    return (
        <div className="single_post_wrapper">
      <div className="single_post_card">
        <div className="image_boxx">
          <img src={postData[0]?.img} alt="" />
      
        </div>
        <div className="post_auth_info">
            <span><FaRegUser/>{postData[0]?.author}</span>
            <span><FaUsers /> {postData[0]?.click}</span>
        </div>
      <div className="post_details">
        <h1>{postData[0]?.title}</h1>
        <p>{postData[0]?.decs}</p>
        <p>{postData[0]?.decs}</p>
        <p>{postData[0]?.decs}</p>
      </div>
      </div>
       
      
      
    </div>
 

    );
};

export default Singlepost;