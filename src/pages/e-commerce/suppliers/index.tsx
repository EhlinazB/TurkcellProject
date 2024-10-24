import React from 'react'
import { Route, Routes } from 'react-router-dom'
import List from './list'
import Detail from './detail'
import Add from './add'

function SuppliersRoutes() {
  return <>
  <Routes>
    <Route path='' element={<List />} />
    <Route path='/:id' element={<Detail />} />
    <Route path='add' element={<Add/>} />
  </Routes>
  </>
}

export default SuppliersRoutes