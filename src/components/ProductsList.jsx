import React from 'react'
import ProductCard from './ProductCard'
import { ProdList } from './style'

const products = [
    {id: 1, name: 'Apple', img: '1.jpg', description: 'Some description of Apple', price: 10 },
    {id: 2, name: 'Pineapple', img: '2.jpg', description: 'Some description of Pineapple', price: 20 },
    {id: 3, name: 'Cherry', img: '3.jpg', description: 'Some description of Cherry', price: 30 },
    {id: 4, name: 'Watermelon', img: '4.jpg', description: 'Some description of Watermelon', price: 40 },
    {id: 5, name: 'Peach', img: '5.jpg', description: 'Some description of Peach', price: 50 },
    {id: 6, name: 'Strawberry', img: '6.jpg', description: 'Some description of Strawberry', price: 60 },
]

const ProductsList = () => {
    return (
        <div>
            <ProdList> {
                products.map((item) => {
                    return (
                        <ProductCard products={item} key={item.id}/>
                    )
                })
            }
            </ProdList>
        </div>
    )
}

export default ProductsList
