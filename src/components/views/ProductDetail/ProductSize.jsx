import React, { useEffect, useState } from 'react'


export const ProductSize = ({products}) => {

    
  const [selected, setSelected] = useState(1)
  const [sizes, setSizes] = useState({
    first: "",
    second: "",
    third: "",
  })
  // const cat = products.category

  // 'pants'
  // 'shoes'
  // 'purses'
  // 't-shirts'
  // 'jackets'

  
  useEffect(() => {
    if (products.category === 'pants') {
      return setSizes({ first: { size: '36"', label: 'Small' }, second: { size: '40"', label: 'Medium' } , third: { size: '42"', label: 'Large' } })
    }
    if (products.category === 'shoes') {
      return setSizes({ first: { size: '38', label: 'EUR' }, second: { size: '42', label: 'EUR' } , third: { size: '44', label: 'EUR' } })
    }
    if (products.category === 't-shirts' || products.category === 'jackets' ) {
      return setSizes({ first: { size: 'S', label: 'Small' }, second: { size: 'M', label: 'Medium' } , third: { size: 'L', label: 'Large' } })
    }
    if (products.category === 'purses') {
      return setSizes({ first: { size: 'Black', label: 'Color' }, second: { size: 'Pink', label: 'Color' } , third: { size: 'Blue', label: 'Color' } })
    }
  }, [products.category])
  

  console.log(sizes);



  return (
    <>
        <span className='size'>Select Size: <span>Medium</span></span>
        <div className='size-options'>
            <div className={selected === 1 ? "select" : ""} onClick={ () => setSelected(1)}><span>{ sizes.first.size }</span><span>{sizes.first.label}</span></div>
            <div className={selected === 2 ? "select" : ""} onClick={ () => setSelected(2)}><span>{ sizes.second.size }</span><span>{sizes.second.label}</span></div>
            <div className={selected === 3 ? "select" : ""} onClick={ () => setSelected(3)}><span>{ sizes.third.size }</span><span>{sizes.third.label}</span></div>
        </div>
    </>
  )
}
