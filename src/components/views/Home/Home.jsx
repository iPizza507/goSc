import { Navbar, Header, Footer, BestSellers } from "../../views"
import brand from "../../svgs/brand.svg"
import "./styles.css"

import {useSelector, useDispatch} from "react-redux"
import { useEffect } from "react"
import axios from "axios"
import {storeAllData} from "../redux/ReduxFunctions"

export function Home() {

  const hardcodedProducts = [
    {
      id:1,
      img: "../assets/img001.png",
      name: "T-shirts",
      quantity: 103,
    },
    {
      id:2,
      img: "../assets/img002.png",
      name: "Pants",
      quantity: 103,
    },
    {
      id:3,
      img: "../assets/img003.png",
      name: "Purses",
      quantity: 55,
    },
    {
      id:4,
      img: "../assets/img004.png",
      name: "Jackets",
      quantity: 103,
    },
  ]

  const dispatch = useDispatch()
  const {allApiDataReducer} = useSelector(state =>{
    // console.log(state)
    // console.log(state.allApiDataReducer)
    return state;
  })

  useEffect(() => {
    (async function () {
      try{
        const res = await axios.get('https://alkcommerceback.herokuapp.com/products')
        dispatch( storeAllData(res.data) ) //PONER todos los productos en redux
        // console.log(allApiDataReducer) //igual aca no te llega a mostrar
      }
      catch(err){
        console.log(err)
      }
    })()
  },[dispatch])
  
  return (
    <>
      <Navbar /> 
      <Header />
      <section className="home-section">
        <div className="container-home">
          <div className="brands">
            <img src={brand} alt="" />
          </div>
        </div>
        <div className="featured-products">
          <div className="main-product">
            <p>Explore new and popular styles</p>
            <img src="../assets/img00.png" alt="" />
          </div>
          <div className="grid-products">
            {hardcodedProducts.map(({ img, name, quantity, id }) => (
              <div key={id} className="img-container">
                <img src={img} alt={name} />
                <div className="tooltip">
                  <p>{name}</p>
                  <p>{quantity} Products</p>
                </div>  
              </div>
            ))}
          </div>
        </div>
        <BestSellers />
      </section>
      <Footer />
    </>
  )
}
