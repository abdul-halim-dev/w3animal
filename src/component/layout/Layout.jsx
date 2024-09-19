 
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { Outlet } from 'react-router-dom'
import Aside from '../aside/Aside';

const Layout = () => {
    return (
        <div className='layout'>

            <Header/>

            <div className="main_body">
            <Outlet/>
            <Aside/>
            </div>
            <Footer/>
             
 
        </div>

    );
};

export default Layout;