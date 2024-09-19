import { useEffect, useState } from "react";
import axios from 'axios'
import Postcard from "../../component/postcard/Postcard";
 
const Home = () => {

const [cardValue, setCardValue] = useState([ ]);

useEffect( ()=>{

    const fetchingCardData = async ()=>{
        const cardStore = await axios.get( " http://localhost:5173/src/data/datajson/Data.json ");
        setCardValue( cardStore.data.filter( (item)=>item.id <=12 ))
         
    } 
    fetchingCardData();




     

}, [] )





    return (

        <>
       
        <div className='home_conainer'>
       

           {
            cardValue.map( (item)=>(
                <Postcard key={item.id} cardInfo={item}/>
             ) )
           }
        </div>
        </>
    );
};

export default Home;