import React from 'react'
import { useParams } from 'react-router-dom'
import useSWR from 'swr'
import { axiosInstance } from '../../../../config/axiosInstance'
import { Supplier } from '../model/Supplier'


function Detail() {

    const {id} = useParams()
    const {data, isLoading} = useSWR("suppliers/"+id, () => {
        return axiosInstance.get<Supplier>("suppliers/"+id)
        .then(res => res.data)
    })

  return <>
    <h1>Supplier Detail</h1>
    <hr />
    {
        isLoading ? <h1>loading...</h1> :
        <div>
            <h2>Company Name: {data?.companyName}</h2>
            <p>Contact Name: {data?.contactName}</p>
            <p>Contact Title: {data?.contactTitle}</p>
            <h3>Address</h3>
            <p>City: {data?.address?.city}</p>
            <p>Region: {data?.address?.region}</p>
            <p>Postal Code: {data?.address?.postalCode}</p>
            <p>Country: {data?.address?.country}</p>

        </div>
    }
  
  </>
}

export default Detail