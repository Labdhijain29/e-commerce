import React , {useState , useEffect}from 'react'
import ProductCard from '../../components/ProductCard'
import Categories from '../../components/Categories'


const Products = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      setProducts(data)
    }
    fetchProducts()
  }, [])
  return (
    <div className='bg-light bg-yellow-50'>
    <Categories />
    <div>
        <div className="flex flex-col text-center w-full mt-20 p-4">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
            <h1 className="sm:text-3xl text-3xl font-medium title-font text-gray-900">ALL PRODUCTS</h1>
        </div>
    </div>
    <div className="mt-4">
        {products.length > 0 ? <ProductCard products={products} /> : <div>Loading....</div>}
    </div>
</div>

  )
}

export default Products