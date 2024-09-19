 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './component/layout/Layout';
import Home from './pages/home/Home';
import Category from './pages/category/Category';
import Singlepost from './pages/singlepost/Singlepost';
import Pagenot from './pages/pagenot/Pagenot';
import Signup from './backendcom/signup/Signup';
import Login from './backendcom/login/Login';



const rout =createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/category/:id",
        element:<Category/>
      },
      {
        path:"/singlepost/:postId",
        element:<Singlepost/>
      },
      {
        path:"*",
        element:<Pagenot/>
      }
    ]
  },
  {
    path:"/signup",
     element:<Signup/>
  },
  {
    path:"/login",
    element:<Login/>
  }

])


 
 const App = () => {
 
  return (
    <RouterProvider router={rout}> </RouterProvider>
  );
 };
 
 export default App;