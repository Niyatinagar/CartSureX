import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import Login from '../pages/Login'
import ForgotPassowrd from '../pages/ForgotPassowrd'
import SignUp from '../pages/SignUp'
import AdminPanel from '../pages/AdminPanel'
import AllUsers from '../pages/AllUsers'
import AllProducts from '../pages/AllProducts'
import CategoryProduct from '../pages/CategoryProduct'
import ProductDetails from '../pages/ProductDetails'
import Cart from '../pages/Cart'
import SearchProduct from '../pages/SearchProduct'
import Profile from '../pages/Profile'
import Success from '../pages/Success'
import Cancel from '../pages/Cancel'
import OrderPage from '../pages/OrderPage'
import ProductWarranty from '../pages/ProductWarranty'
import WarrantyDetails from '../pages/WarrantyDetails'
import AllOrder from '../pages/AllOrder'
import AllWarranties from '../pages/AllWarranties'
import LoginSuccess from '../components/LoginSuccess'

const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "",
                element : <Home/>
            },
            {
                path : "login",
                element : <Login/>
            },
            {
                path : "login-success",
                element : <LoginSuccess/>
            },
            {
                path : "forgot-password",
                element : <ForgotPassowrd/>
            },
            {
                path : "sign-up",
                element : <SignUp/>
            },
            {
                path : "product-category",
                element : <CategoryProduct/>
            },
            {
                path : "product/:id",
                element : <ProductDetails/>
            },
            {
                path : 'cart',
                element : <Cart/>
            },
            {
                path : 'success',
                element : <Success/>
            },
            {
                path : "cancel",
                element : <Cancel/>
            },
            {
                path : 'order',
                element : <OrderPage/>
            },
            {
                path: "warranty/:warrantyId",
                element: <WarrantyDetails />
            },
            {
                path: "product/:id/warranty", 
                element: <ProductWarranty/>
            },
            {
                path : "search",
                element : <SearchProduct/>
            },
            {
                path : "profile",
                element : <Profile/>
            },
            {
                path : "admin-panel",
                element : <AdminPanel/>,
                children : [
                    {
                        path : "all-users",
                        element : <AllUsers/>
                    },
                    {
                        path : "all-products",
                        element : <AllProducts/>
                    },
                    {
                        path : "all-orders",
                        element : <AllOrder/>
                    },
                    {
                        path: "all-warranties",
                        element: <AllWarranties/>
                    }
                ]
            },
        ]
    }
])


export default router