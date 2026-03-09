import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import Add from '../pages/Add'
import List from '../pages/List'
import Orders from '../pages/Orders'

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
         <Route path='/add' element={<Add/>}/>
         <Route path='/list' element={<List/>}/>
         <Route path='/orders' element={<Orders/>}/>
      </Route>
    </Routes>
  )
}

export default AppRoutes
