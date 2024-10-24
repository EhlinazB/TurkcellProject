import { Link, Route, Routes } from 'react-router-dom'
import CategoryRoutes from './pages/e-commerce/categories'
import ProductRoutes from './pages/e-commerce/products'
import SuppliersRoutes from './pages/e-commerce/suppliers'
import OrdersRoutes from './pages/e-commerce/orders'
import { Container } from '@mui/material'
import Favorites from './pages/e-commerce/products/list/Favorites'
import { useContext } from 'react'
import { FavoritesContext } from './context/FavoritesContext'

function App() {

  const { favorites } = useContext(FavoritesContext)

  return <>

    <ul style={{ display: 'flex', justifyContent: 'space-between' }}>
      <li><Link to={"/categories"}>Categories</Link></li>
      <li><Link to={"/products"}>Products</Link></li>
      <li><Link to={"/favorites"}>Favorites <span style={{color:'red'}}>({favorites.length})</span></Link></li>
      <li><Link to={"/suppliers"}>Suppliers</Link></li>
      <li><Link to={"/orders"}>Orders</Link></li>
    </ul>
    <hr />
    <Container>
      <Routes>
        <Route path='/categories/*' element={<CategoryRoutes />} />
        <Route path='/products/*' element={<ProductRoutes />} />
        <Route path='/suppliers/*' element={<SuppliersRoutes />} />
        <Route path='/orders/*' element={<OrdersRoutes />} />
        <Route path='/favorites/*' element={<Favorites />} />
      </Routes>
    </Container>

  </>
}

export default App