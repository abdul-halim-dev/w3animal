 
import {  NavLink } from "react-router-dom";
import { FaSearch , FaBars } from "react-icons/fa";
import { RiCloseLargeFill } from "react-icons/ri";
import { useState } from "react";
 
const Header = () => {


    const navInfo = [
        {
            id:1,
            title:"birds"
        },{
            id:2,
            title:"animals"
        },
        {
            id:3,
            title:"trees"
        },
        {
            id:4,
            title:"travels"
        },
        {
            id:5,
            title:"forest"
        },
        {
            id:6,
            title:"pets"
        },
        {
            id:7,
            title:"fish"
        }

    ];

    const [inputValue, setinputValue]= useState(false);
    const [bar, setbar] = useState(false);

    const barhandle = ()=>{
        setbar(prev => !prev)
    }

    const handleSearchBox = ()=>{
        setinputValue( prev=> !prev)
    }
    
    return (
        <header>
          <div className="logo_brand">
            <span> W3</span> 
            <h1> Animal</h1>
            </div>

            <nav  className={bar ? "active" : ''}>
            
               
                <ul   >
                    <li>   <NavLink    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }   to="/"> Home</NavLink> </li>
                            
                    {
                    navInfo.map((item)=>(
                        <li key={item.id}>   <NavLink to={`/category/${item.title}`}>  { item.title} </NavLink> </li>

                    ))
                        }
               
                </ul>
           
            
             </nav> 

           

                <div className="search_box">
 
              <div className="input_boxx">

                {
                inputValue ? <input type="search" name="" id="" placeholder="Search Here" /> :" "
                }
                            <button onClick={handleSearchBox}> {inputValue ? <RiCloseLargeFill /> :<FaSearch/>   } </button>
                            </div>

                    <div className="nav_bar">
                    <button onClick={barhandle}> { bar ? <RiCloseLargeFill /> :  <FaBars/> } </button>
                </div>
                
                </div>
         
        </header>
    );
};

export default Header;