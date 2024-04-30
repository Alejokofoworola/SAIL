import Home from "./pages/Home"
import Login from "./pages/Login"
import Setting from "./pages/setting"
import Admin from "./pages/Admin"
import User from "./pages/user"



const router = createBrowserRouter([
    {
    path: "/",
    element: <Mainlayout/>,
    children:[
        {
        index:true,
        element: <Home/>
    },
    {
        path:'./user',
        element: <User/>
    },

{
        path:'./Home',
        element: <Setting/>
    },

{
        path:'./login',
        element: <Login/>
    },
    {
        path:'./admin',
        element: <Admin/>
    }

]
}
])