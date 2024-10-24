import { Route, Routes } from 'react-router-dom'
import List from './list'

function OrdersRoutes() {



    return <>
        <Routes>
            <Route path='' element={<List />} />
        </Routes>
    </>
}

export default OrdersRoutes


