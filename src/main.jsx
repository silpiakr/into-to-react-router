import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home/Home'
import Header from './components/Header/Header.jsx'
import About from './components/About/About.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './components/Contact/Contact.jsx'
import Services from './components/Services/Services.jsx'
import Users from './components/Users/Users.jsx'
import UserDetailes from './components/UserDetailes/UserDetailes.jsx'
import Posts from './components/Posts/Posts.jsx'
import PostDetailes from './components/PostDetailes/PostDetailes.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/services",
        element: <Services></Services>
      },
      {
        path: "/users",
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path: '/user/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetailes></UserDetailes>
      },
      {
        path: '/post',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path: '/post/:postId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetailes></PostDetailes>
      },
    ]
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
