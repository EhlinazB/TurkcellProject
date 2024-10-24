import React, { useEffect, useState } from 'react'
import { Product } from '../model/Product'
import { axiosInstance } from '../../../../config/axiosInstance'
import { useParams } from 'react-router-dom'

function Detail() {

    const [detail, setdetail] = useState<Product>({})

    const { id } = useParams()

    useEffect(() => {

        axiosInstance.get<Product>(`products/${id}`)
            .then(res => {
                setdetail(res.data)
            })
            .catch(err => {
                console.log(err)
            })

    }, [])


    return <>
        <h1>Detail</h1>
        <hr />
        <h2>Name: {detail.name}</h2>
        <p>Unit Price: {detail.unitPrice}</p>
        <p>Units In Stock: {detail.unitsInStock}</p>
        <p>Quantity Per Unit: {detail.quantityPerUnit}</p>
        
    </>
}

export default Detail