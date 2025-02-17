'use client'

import React, { useEffect } from 'react'


import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { fetchProductlist } from '@/lib/features/product/productSlice'


const ProductPage = () => {

    const { loading, productlist } = useAppSelector((state) => state.product)
    const dispatch = useAppDispatch()

    console.log('productlist: ', productlist)

    useEffect(() => {

        dispatch(fetchProductlist())

    }, [])



    return (
        <div>
            <ul style={{ listStyle: "none", display: "flex", flexWrap: "wrap", gap: "20px", padding: 0 }} >
                {
                    productlist?.map((item, index) => (
                        <li key={item.id} style={{ width: "30%", textAlign: "center" }}>
                            <div>
                                <img src={item?.images[0]} style={{ width: "50px", height: "50px" }} />
                                <h4>{item.title}</h4>

                                <p>{item.price}</p>
                                <button>Add to Cart</button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ProductPage
