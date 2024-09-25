import React from 'react'
import { Link } from 'react-router-dom'
const ProductCard = ({products = []}) => {
    return (
        <section className="text-gray-600 body-font bg-light bg-yellow-50">
    <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-wrap -m-4">
            {products.map((product) => {
                const { id, title, price, category, image } = product;   
                return (
                    <Link to={`/products/${id}`} className="lg:w-1/4 md:w-1/2 p-4 w-full border border-opacity-100 mb-4 cursor-pointer" key={id}>
                        <div className="block relative h-48 rounded overflow-hidden">
                            <img alt={title} className="object-contain object-center w-full h-full block" src={image} />
                        </div>
                        <div className="mt-2">
                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">{category}</h3>
                            <h2 className="text-gray-900 title-font text-lg font-bold">{title}</h2>
                            <p className="mt-1 text-md font-semibold">${price}</p>
                        </div>
                    </Link>
                )
            })}
        </div>
    </div>
</section>
    )
}

export default ProductCard