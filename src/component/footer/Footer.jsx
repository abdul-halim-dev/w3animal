 
import { FaFacebook } from "react-icons/fa";

import { BsTwitterX } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
       


<div className="main_footer">
 <div className="footer_container">

<div className="footer_box">
<div className="footer_brand">
<span> W3</span> 
<h1> Animal</h1>
</div>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quia    </p>
</div>

<div className="footer_box">
<div className="footer_brand">

<h1> Thank You </h1>
</div>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quia animi qui nostrum, provident at! 
adipisicing elit. Ut quia animi qui
</p>
</div>

<div className="footer_box">
<div className="footer_brand">

<h1> Follow US </h1>
</div>
<div className="footer_icons">
<Link>  <FaFacebook/>  </Link>
<Link>  <BsTwitterX/>  </Link>
<Link>  <IoLogoYoutube/>  </Link>
</div>

</div>

</div>

<div className="last_footer">
    <p> All Copywrite W3Animal</p>
</div>

</div>
    );
};

export default Footer;