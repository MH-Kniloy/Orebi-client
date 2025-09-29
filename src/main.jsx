import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { DropdownContext } from './context/DropdownContext/DropdownContext.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootLayouts from './components/Layouts/RootLayouts/RootLayouts.jsx'
import Home from './pages/Home.jsx'
import Dashboard from './pages/Dashboard.jsx';
import Welcome from './components/Welcome/Welcome.jsx';
import CreateProduct from './components/CreateProduct/CreateProduct.jsx';
import CreateCategory from './components/CreateCategory/CreateCategory.jsx';
import CategoryList from './components/CategoryList/CategoryList.jsx';
import { ToastContainer} from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayouts></RootLayouts>,
    children: [
      {
        index:true,
        element: <Home></Home>,
      },
    ],
  },
  {
    path:"/dashboard",
    element: <Dashboard />,
    children:[
      {index:true, element:<Welcome/>},
      {path:"/dashboard/createproduct", element:<CreateProduct/>},
      {path:"/dashboard/createcategory", element:<CreateCategory/>},
      {path:"/dashboard/categorylist", element:<CategoryList/>},
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DropdownContext>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <RouterProvider router={router} />
    </DropdownContext>
  </StrictMode>
);
