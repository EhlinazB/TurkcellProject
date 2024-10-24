import React from 'react'
import { Route, Routes } from 'react-router-dom'
import List from './list'
import Detail from './detail'
import Add from './add'

function ProductRoutes() {
  return <>
    <Routes>
        <Route path='add' element={<Add/>} />
        <Route path="/" element={<List />} />
        <Route path=":id" element={<Detail />} />
    </Routes>
  </>
}

export default ProductRoutes