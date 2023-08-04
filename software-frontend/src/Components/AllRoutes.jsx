import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Video } from './Video'
import Login from './Forms/Login'

import CategoryForm from './Forms/CategoryForm'
import SliderForm from './Forms/SliderForm'
import StoryForm from './Forms/StoryForm'

import PrivateRoute from './PrivateRoute/PrivateRoute'
import { Center } from './Center'
import Dashboard from './Dashboard'
import { Home } from './All Pages/Home'
import { Contact } from './All Pages/Contact'
import { About } from './All Pages/About'





export const AllRoutes = () => { 
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/video" element={<Video/>} />
        <Route path="/center" element={<Center/>} />
        <Route path="/contact" element={<Contact/>} /> 
        <Route path="/about" element={<About/>} />
        <Route path="/video" element={<Video/>} /> 
        <Route path="/slider" element={<PrivateRoute><SliderForm/></PrivateRoute>} />
        <Route path="/category" element={<PrivateRoute><CategoryForm/></PrivateRoute>} />
        <Route path="/story" element={<PrivateRoute><StoryForm/></PrivateRoute>} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>} />


     



      </Routes>
  )
}
