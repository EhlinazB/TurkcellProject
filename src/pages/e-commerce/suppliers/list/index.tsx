import React from 'react'
import useSWR from 'swr'
import { axiosInstance } from '../../../../config/axiosInstance'
import { Supplier } from '../model/Supplier'

function List() {

    const {data, isLoading} = useSWR("suppliers", () => {
        return axiosInstance.get<Supplier[]>("suppliers")
        .then(res => res.data)
    })

  return <>
       {
            isLoading ? <h1>loading...</h1> :
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Company Name</th>
                            <th>Contact Name</th>
                            <th>Contact Title</th>
                            <th>Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map(p =>
                            <tr key={p.id}>
                                <td>{p.id}</td>
                                <td>{p.companyName?.toUpperCase()}</td>
                                <td>{p.contactName}</td>
                                <td>{p.contactTitle}</td>
                                <td><a href={`/suppliers/${p.id}`}>Detail</a></td>
                            </tr>
                        )}
                    </tbody>
                </table>
       }
  </>
}

export default List