import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Postcard from "../../component/postcard/Postcard";

 

const Category = () => {

const birdId = useParams();

 
const [filterPost, setFilterpost] = useState([]);

useEffect( ()=>{
    window.scrollTo(0,0);
const filterBirdCard = async ()=>{

   try {
    
    const birdCard = await axios.get("http://localhost:5173/src/data/datajson/Data.json ");
    //  setFilterpost( birdCard.data.filter( (item)=> item.id <= 9 ))
    const mainPost = birdCard.data;
   
    const postfilterData =  await mainPost.filter( (item)=> item.category === birdId.id );
    setFilterpost(postfilterData)
     
   } catch (error) {
    console.log(error)
   }

//    



}

filterBirdCard();

} , [birdId])




    return (
       <>
       { filterPost.length === 0 ? <div>No post Upload For this Category</div> : 
       <div className="category_container">
            
            <div className="page_header">
                <h2>Category-{birdId.id.toUpperCase()}</h2>
            </div>

            <div className="caterogy_main_card"> 

                {
                    filterPost.map( (item)=>(
                        <Postcard key={ item.id} cardInfo={item}/>
                    ) )
                }

        </div>
        <div className="button_group">
            <button className='load_more_btn'>Load More</button>
        </div>
     
        </div>
    }
     </>
    );
};

export default Category;



// <div className="home_container">
// {
//     showPosts.map((item)=>(
//         <PostCard key={item.id} info={item}/>
//     ))
// }

// <div className="button_group">
//     <button className='load_more_btn'>Load More</button>
// </div>
// </div>