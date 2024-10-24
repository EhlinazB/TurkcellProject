import React from 'react'
import { Route, Routes } from 'react-router-dom'
import List from './list'
import Add from './add'
import Detail from './detail'
import Edit from './edit'

function CategoryRoutes() {
    return <>
        <Routes>
            <Route path="/" element={<List />} />
            <Route path='add' element={<Add />} />
            <Route path=':id' element={<Detail />} />
            <Route path='edit/:id' element={<Edit />} />
        </Routes>
    </>
}

export default CategoryRoutes