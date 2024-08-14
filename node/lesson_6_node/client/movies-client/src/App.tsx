
import './App.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import { Root } from './components/pages/root';


import Login from './components/pages/login';
import Register from './components/pages/register';
import { User } from './components/pages/user';


export const routes = [
    {
        path: "login",
        label: "login",
        visible: true,
        element: <Login />,
    },
    
    {
        path: "register",
        label: "register",
        visible: true,
        element: <Register />,
    },
    {
        path: "login/User",
        label: "User",
        visible: true,
        element: <User />,
    },
  
  
]
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: routes,
    },
]);


function App() {


    return (
        <>
          
                <RouterProvider router={router} />
        
        </>
    )
}

export default App





// const data = [{ movieName: "scream", numberOfLikes: 50 }, { movieName: "scream", numberOfLikes: 50 }]

// type MoviesObjType = {
//     [key: string]: number
// }
// const result = data.reduce((objMovies: MoviesObjType, currentMovie) => {
//     if (!objMovies[currentMovie.movieName]) {
//         objMovies[currentMovie.movieName] = currentMovie.numberOfLikes
//     }
//     return objMovies
// }, {} as MoviesObjType)


// const dataReady = { "scream": 50, "scream2": 63 }
