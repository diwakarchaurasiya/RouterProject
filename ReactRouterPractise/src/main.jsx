import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './index.jsx'
import Home from '../src/components/Home/Home.jsx'
import Contact from '../src/components/Contact/Contact.jsx'
import About from '../src/components/About/About.jsx'
import Notfound from '../src/components/Notfound/Notfound.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
let route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Index />}>
      <Route path='' element={<Home/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='*' element={<Notfound/>}/>

    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
)
