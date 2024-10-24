import React from 'react'
import { useForm } from 'react-hook-form'
import { axiosInstance } from '../../../../config/axiosInstance'
import { useNavigate } from 'react-router-dom'


type Inputs = {
    companyName: string
    contactName: string
    contactTitle: string
}

function Add() {

    const { register, handleSubmit } = useForm<Inputs>()

    const navigate = useNavigate()

    const onSubmit = (data: Inputs) => {
        axiosInstance.post('/suppliers', data)
            .then(res => {
                navigate('/suppliers')
            })
            .catch(err => {
                console.error(err)
            })
    }


    return <>
        <h1>Add Supplier</h1>
        <form onSubmit={handleSubmit(onSubmit)}>

            <div>
                <label>Company Name</label>
                <input type="text" {...register("companyName")} />
            </div>
            <div>
                <label>Contact Name</label>
                <input type="text" {...register('contactName')} />
            </div>
            <div>
                <label>Contact Title</label>
                <input type="text" {...register('contactTitle')} />
            </div>
            <button type="submit">Submit</button>

        </form>
    </>
}

export default Add