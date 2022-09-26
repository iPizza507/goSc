import axios from "axios"
import { useEffect, useState } from "react"
import SearchIcon from "@mui/icons-material/Search"
import DeleteIcon from "@mui/icons-material/Delete"
import { SkeletonTable } from "../SkeletonTable"

export const DashProducts = () => {
  // const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [dataFromApi, setDataFromApi] = useState([])
  const [content, setContent] = useState([])

  useEffect(() => {
    ;(async function () {
      try {
        const res = await axios.get(
          "https://alkcommerceback.herokuapp.com/products"
        )
        setDataFromApi(res.data)
        setLoading(false)
      } catch (err) {
        console.log(err)
      }
    })()
  }, [])

  const handleRemoveProduct = async (id) => {
    const resp = await axios.delete(
      `https://alkcommerceback.herokuapp.com/products/${id}`
    )
    setDataFromApi(dataFromApi.filter((product) => product._id !== id))

    console.log(resp)
  }

  useEffect(() => {
    setContent(
      dataFromApi?.map(({ image, title, price, category, _id }) => (
        <tr className="product-row" key={_id}>
          <td className="prod-img">
            <img src={image} alt="productImage" />
          </td>
          <td>{_id}</td>
          <td>{title}</td>
          <td>{category}</td>
          <td>${price}</td>
          <td onClick={() => handleRemoveProduct(_id)}>
            <DeleteIcon className="delete-icon" />
            Delete
          </td>
        </tr>
      ))
    )
  }, [dataFromApi])

  const handleSubmitSearch = (e) => {
    e.preventDefault()
  }

  const handleSearchChange = (e) => {
    if (!e.target.value) {
      setContent(
        dataFromApi?.map(({ image, title, price, category, _id }) => (
          <tr className="product-row" key={_id}>
            <td className="prod-img">
              <img src={image} alt="productImage" />
            </td>
            <td>{_id}</td>
            <td>{title}</td>
            <td>{category}</td>
            <td>${price}</td>
            <td onClick={() => handleRemoveProduct(_id)}>
              <DeleteIcon className="delete-icon" />
              Delete
            </td>
          </tr>
        ))
      )
    }

    const filtered = dataFromApi.filter(
      (product) =>
        product.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
        product.category.toLowerCase().includes(e.target.value.toLowerCase())
    )

    if (e.target.value) {
      setContent(
        filtered.map(({ image, title, price, category, _id }) => (
          <tr className="product-row" key={_id}>
            <td className="prod-img">
              <img src={image} alt="productImage" />
            </td>
            <td data-label="id">{_id}</td>
            <td data-label="Name">{title}</td>
            <td data-label="Category">{category}</td>
            <td data-label="Price">${price}</td>
            <td onClick={() => handleRemoveProduct(_id)}>
              <DeleteIcon className="delete-icon" />
              Delete
            </td>
          </tr>
        ))
      )
    }
  }

  return (
    <div className="content">
      <h1>Products</h1>
      <form className="search" onSubmit={handleSubmitSearch}>
        <button>
          <SearchIcon style={{ color: "#18273af0" }} />
        </button>
        <input
          onChange={handleSearchChange}
          type="text"
          placeholder="Search something..."
        />
      </form>
      {loading ? (
        <SkeletonTable />
      ) : (
        <table>
          <tbody>
            <tr>
              <th>Image</th>
              <th>Id</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </tbody>
          <tbody>{content}</tbody>
        </table>
      )}
    </div>
  )
}
