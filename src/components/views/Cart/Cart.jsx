import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ProductCard } from "../ProductCard/ProductCard"
import { Link } from "react-router-dom"
import "./styles.css"
import { Navbar } from "../Navbar/Navbar"
import { Footer } from "../Footer/Footer"
import { increaseQuantity, removeFromCart } from "../redux/ReduxFunctions"
import { decreaseQuantity } from "../redux/ReduxFunctions"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"

export const Cart = () => {
  const dispatch = useDispatch()

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id))
  }

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity(id))
  }

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id))
  }

  const { error, loading, cart } = useSelector((state) => {
    console.log(state.cartReducer) // SOLO el reducer del carrito
    return state.cartReducer
  })

  const [showPhone, setShowPhone] = useState()
  console.log(window.innerWidth)
  function resizeListener() {
    setShowPhone(window.innerWidth)
  }
  //por si cambia en la misma pantalla
  window.addEventListener("resize", resizeListener)

  console.log("este es el cart en CART: ", cart)

  return (
    <div className="cart" onLoad={resizeListener}>
      <Navbar />
      <h3>Home / Cart</h3>
      <h2>Cart</h2>
      {
        /* algun icono de un carrito */
        console.log(cart)
      }
      <span id="width"></span>
      <div className="cart-container">
        {showPhone > 500 ? (
          <table className="cart-left">
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td>PRODUCT</td>
                <td>PRICE</td>
                <td>CATEGORY</td>
                <td>QUANTITY</td>
                <td>SUBTOTAL</td>
              </tr>
              {cart.length > 0 ? (
                cart.map((productInCart, i) => (
                  <tr>
                    <td onClick={() => handleRemoveFromCart(productInCart._id)}>
                      X
                    </td>
                    <td>
                      <img
                        src={productInCart.image}
                        style={{ width: "50%" }}
                        alt=""
                      />
                    </td>
                    <td
                      style={{
                        color: "rgb(212, 192, 75)",
                        fontWeight: "900",
                      }}
                    >
                      {productInCart.title}
                    </td>
                    <td>{productInCart.price}$</td>
                    <td
                      style={{
                        color: "rgb(212, 192, 75)",
                        fontWeight: "900",
                      }}
                    >
                      {productInCart.category}
                    </td>
                    <td className="quantity-td">
                      <button
                        onClick={() =>
                          productInCart.quantity > 1
                            ? handleDecreaseQuantity(productInCart._id)
                            : handleRemoveFromCart(productInCart._id)
                        }
                        className="btn-quantity"
                      >
                        <RemoveIcon />
                      </button>
                      <b>{productInCart.quantity}</b>
                      <button
                        onClick={() =>
                          handleIncreaseQuantity(productInCart._id)
                        }
                        className="btn-quantity"
                      >
                        <AddIcon />
                      </button>
                    </td>
                    <td>{productInCart.price * productInCart.quantity}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td >
                    <h3>Sorry, the cart is empty!</h3>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              )}
            </tbody>
          </table>
        ) : (
          <table className="cart-phone">
            <tbody>
              {cart.length > 0 ? (
                cart.map((productInCart, i) => {
                  return (
                    <div>
                      <tr>
                        <td className="td-img">
                          <img
                            src={productInCart.image}
                            style={{ width: "50%" }}
                            alt=""
                          />
                        </td>
                        <td className="td-x">
                          {" "}
                          <a
                            onClick={() => {
                              console.log("sacar del carrito")
                            }}
                          >
                            X
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>CATEGORY:</td>
                        <td>{productInCart.category}</td>
                      </tr>
                      <tr>
                        <td>PRODUCT:</td>
                        <td>{productInCart.title}</td>
                      </tr>

                      <tr>
                        <td>PRICE:</td>
                        <td>{productInCart.price}$</td>
                      </tr>
                      <tr>
                        <td>QUANTITY:</td>
                        <td>{productInCart.quantity}</td>
                      </tr>
                      <tr>
                        <td>SUBTOTAL:</td>
                        <td>4500$</td>
                      </tr>
                    </div>
                  )
                })
              ) : (
                <tr className="sorry">
                  <td >
                    <h3>Sorry, the cart is empty!</h3>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}

        <div className="cart-right">
          <h3>Cart totals</h3>
          <div>
            <p>SUBTOTAL</p>
            {/* <p>
              {cart.length <= 0
                ? "0"
                : cart.reduce((total, product) => {
                    return total + product.price
                  })}
            </p> */}
          </div>
          <div>
            <p>TOTAL</p>
            {/* <p>
              {cart.length <= 0
                ? "0"
                : cart.reduce((total, product) => {
                    return total + product.price
                  })}
            </p> */}
          </div>
          <button>Proceed to checkout</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}
