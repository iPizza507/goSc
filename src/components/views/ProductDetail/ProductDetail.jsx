import { useEffect, useMemo, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { getProductById } from "../../../helpers/getProductById"
import { Navbar } from "../../views"
import { ProductSize } from "./ProductSize"
import { useDispatch } from "react-redux"
import { addToCart } from "../redux/ReduxFunctions"
import { ProductLoader } from "./ProductLoader"
import Swal from "sweetalert2"
import axios from "axios"
import "./styles.css"


export const ProductDetail = () => {
  const dispatch = useDispatch()

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
    Swal.fire({
      icon: "success",
      title: "agregaste al carrito",
      timer: 1000,
    })
  }

  const [dataFromApi, setDataFromApi] = useState([])
  const [loading, setLoading] = useState(true)

  const productsApi = async () => {
    try {
      const res = await axios.get(
        "https://alkcommerceback.herokuapp.com/products"
      )
      console.log(res.data)
      setDataFromApi(res.data)
      setLoading(false)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    productsApi()
  }, [])

  const { _id } = useParams()

  const product = useMemo(
    () => getProductById(_id, dataFromApi),
    [_id, dataFromApi]
  )

  return (
    <>
      {!loading ? (
        <>
          <Navbar />
          <section className="product-section">
            {
              /*Es mejor que sea una flecha en vez de BACK */
            }
          <Link to="/" className="button-back">BACK</Link>
            <div className="product-container">
              <div className="product-img">
                <img src={product.image} alt="product_img" />
              </div>

              <div className="product-info">
                <h1 className="title">{product.title}</h1>
                <span className="price">€{product.price}*</span>
                <p className="description">{product.description}</p>

                <ProductSize products={product} />

                <div className="buttons">
                  <Link to="#" onClick={() => handleAddToCart(product)}>
                    Add to Bag
                  </Link>
                  <span>or</span>
                  <Link to="/products">Go to Products</Link>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <ProductLoader />
      )}
    </>
  )
}
