import React from 'react'
import ReactDOM from 'react-dom';
import App from './App'
import Index from './pages/Index'
import { Moveset } from './pages/Moveset';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { NewCharacter } from './pages/NewCharacter';
import { Login } from './pages/login';
import { Profile } from './pages/profile';

//routes:

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Index />
      },
      {
        path: "/character",
        element: <NewCharacter />
      },
      {
        path: "/moveset",
        element: <Moveset/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/profile",
        element: <Profile/>
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)