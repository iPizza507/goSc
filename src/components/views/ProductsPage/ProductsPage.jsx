import React, {useState, useEffect, useRef} from 'react'
import axios from "axios";
import { ProductCard }from "../ProductCard/ProductCard"
import { Navbar } from "../../views"
import "./styles.css"
import { SkeletonCard } from '../ProductCard/SkeletonCard';
import debounce from 'lodash.debounce'
// import { Link } from 'react-router-dom'
// import { useSelector } from 'react-redux';




export const ProductsPage = () => {

  // GET + POST
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [renderList, setRenderList] = useState(null)
  const [catFilter, setCatFilter] = useState(null)
  const searchInput = useRef()
  const [selected, setSelected] = useState(null)

  
  useEffect(() => {
    (async function () {
      try{
        const res = await axios.get('https://alkcommerceback.herokuapp.com/products')
        setProducts(res.data)
        setLoading(false)
      }
      catch(err){
        console.log(err)
      }
    })()
  },[])
  

  useEffect(() => {
    if (search) {
      let i = search.toLocaleLowerCase()
      catFilter !== null ?
      setRenderList(catFilter.filter(data => data.title.toLocaleLowerCase().startsWith(i)))
      :
      setRenderList(products.filter(data => data.title.toLocaleLowerCase().startsWith(i)))
    } else {
      catFilter !== null ?
      setRenderList(catFilter)
      :
      setRenderList(products)
    }
  }, [search, products, catFilter])

/*
  const addProducto = ()=>{
    try {
      const res = axios.post('https://alkcommerceback.herokuapp.com/products', {
        "title": "usando el POST FALOP DESDE LA APP",
        "description": "alta jogineta para inveirno sfaf fsuaobf d asd f sf aefeffsefes efsString",
        "price": 6501,
        "image": "String",
        "category": "pants" 
      })
      console.log(res);
    }
    catch(err) {
      console.log(err)
    }
  }*/

  //   const{apiData} = useSelector(state=>{
  //     return state.allApiDataReducer
  //   })
    
  // useEffect(() => {
  //   if(apiData.length > 1){ //si hay esta guardada en redux (de la pag principal)
  //     setDataFromApi(apiData)
  //     setLoading(false)
  //     console.log("por redux")
  //   } else{
  //      (async function () {
  //       try{
  //         const res = await axios.get('https://alkcommerceback.herokuapp.com/products')
  //         console.log(res.data)
  //         setDataFromApi(res.data)
  //         setLoading(false)
  //         console.log("por request")
  //       }
  //       catch(err){
  //         console.log(err)
  //       }
  //     })()
  //   }
  // },[])


  const handleSearch = debounce((event) => {
    setSearch(event.target.value)
  }, 1000)

  const handleCaregory = (event) => {
    let filter = products.filter(data => (data.category.toLocaleLowerCase() === event.target.innerHTML.toLowerCase()))
    setRenderList(filter)
    setCatFilter(filter)
  }

  const handleClear = (event) => {
    setRenderList(products)
    setSearch("")
    setCatFilter(null)
    setSelected(null)
    searchInput.current.value = ""
  }

  // poner negrita en la cat seleccionada
  // arreglar buscador + categoria
  

  return (
    <>
    <Navbar />
    <section className='productPage-section'>
      <div className='container'>
        <div>
        <div className='controler'>
          <div className='search-product'>
            <h3>Search</h3>
           <input
            ref={searchInput}
            type="text"
            onChange={handleSearch}
           />
          </div>
          <div className='select-category'>
            <h3>Categories</h3>
            <ul>
              <li
                value="pants"
                className={selected === 1 ? "select" : ""}
                onClick={ (event) => handleCaregory(event) & setSelected(1) }
              >
                Pants
              </li>
              <li
                  value="shoes"
                  className={selected === 2 ? "select" : ""}
                  onClick={ (event) => handleCaregory(event) & setSelected(2) }
              >
                Shoes
              </li>
              <li
                value="purses"
                className={selected === 3 ? "select" : ""}
                onClick={ (event) => handleCaregory(event) & setSelected(3) }
              >
                Purses
              </li>
              <li
                value="t-shirts" 
                className={selected === 4 ? "select" : ""}
                onClick={ (event) => handleCaregory(event) & setSelected(4)}
              >
                T-Shirts
              </li>
              <li
                value="jackets"
                className={selected === 5 ? "select" : ""}
                onClick={ (event) => handleCaregory(event) & setSelected(5) }
              >
                Jackets
              </li>
            </ul>
          </div>
          <button
            className='clear-filters'
            onClick={handleClear}
          >
            Clear Filters</button>
        </div>
        </div>


        <div className='product-list'>
          {
            renderList?.length === 0 && !loading && <div>No se encontraron productos</div>
          }
          
          { !loading ?
            (renderList.map( (products) => {
              return(
                <ProductCard products={products}/>
              )})
              )
              :
              <>
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
              </>
          }
        </div>
      </div>
    </section>
    </>
  )
}
