import { Dashboard } from "../src/components/views/Dashboard/Dashboard"
import { Routes, Route, Navigate } from "react-router-dom"
import {
  Home,
  Login,
  Register,
  Cart,
  ProductDetail,
  ProductsPage,
  BestSellers,
} from "./components/views"
import { CreateNewProduct } from "./components/views/Dashboard/pages/CreateNewProduct"
import { DashProducts } from "./components/views/Dashboard/pages/DashProducts"
import { UpdateProduct } from "./components/views/Dashboard/pages/UpdateProduct"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/zara" element={<BestSellers />} />
      <Route path="dashboard" element={<Dashboard />}>
        <Route
          index
          path="/dashboard"
          element={<Navigate to="/dashboard/products" replace />}
        />
        <Route path="products" element={<DashProducts />} />
        <Route path="/dashboard/updateProduct" element={<UpdateProduct />} />
        <Route
          path="/dashboard/createNewProduct"
          element={<CreateNewProduct />}
        />
      </Route>

      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:cat/:_id" element={<ProductDetail />} />
    </Routes>
  )
}

export default App
