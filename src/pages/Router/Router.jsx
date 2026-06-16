import { createBrowserRouter } from "react-router";
import Root from "../../components/root/Root";
import Error from "../../components/error/Error";
import Home from "../Home";
import ListedBook from "../ListedBook";
import PageLoad from "./PageLoad";

export const router = createBrowserRouter([
  {
    path: "/",
   Component:Root,
   errorElement:<Error></Error>,
   children:[
    {
        index:true,
        path:'/',
        loader:()=>fetch('booksData.json'),
        Component:Home,
    },
    {
        path:"/listedBook",
        Component:ListedBook,
    },
    {
        path:"/pageLoad",
        Component:PageLoad
    }
   ]
   
  },
//   {
//     path:"*",
//     Component:Error
//   }
]);