import React, { useState } from 'react'
import { useCategories } from '../../../../hooks/api/useCategories'
import { axiosInstance } from '../../../../config/axiosInstance'
import { Product } from '../model/Product'
import { useNavigate } from 'react-router-dom'
import { Button, Stack, TextField } from '@mui/material'
import Grid from '@mui/material/Grid2';


function Add() {

    const { categories, loading, error } = useCategories()
    const [selectedCategoryId, setselectedCategoryId] = useState(1)

    const [name, setName] = useState<string>("")
    const [unitPrice, setUnitPrice] = useState<number>(0)
    const [unitsInStock, setUnitsInStock] = useState<number>(0)


    const navigate = useNavigate()


    const add = () => {

        let newProduct: Product = {
            name: name,
            unitPrice: unitPrice,
            unitsInStock: unitsInStock,
            categoryId: selectedCategoryId
        }

        axiosInstance.post("products", newProduct)
            .then(res => {
                navigate("/products")
            })
            .catch(err => {
                console.log(err)
            })

    }


    return <>
        <Stack spacing={2}>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
 
                    <select onChange={(e) => setselectedCategoryId(parseInt(e.target.value))}>
                        {categories.map((category: any) => <option key={category.id} value={category.id}>{category.name}</option>)}
                    </select>
              
                    <TextField fullWidth type="text" label="Name" onChange={(e) => setName(e.target.value)} />
   
            </Stack>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>

                <TextField fullWidth type="number" label="Unit Price" onChange={(e) => setUnitPrice(parseInt(e.target.value))} />
                <TextField fullWidth type="number" label="Units In Stock" onChange={(e) => setUnitsInStock(parseInt(e.target.value))} />

            </Stack>
            <Stack>
                <div>
                    <Button variant="contained" onClick={add}>Add</Button>
                </div>
            </Stack>
        </Stack>
        {/* <Grid container spacing={2}>
            <Grid size={{ md: 6, xs: 12 }}>
                <h1>Türkiye</h1>
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
                <h1>Yunanistan</h1>
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
                <h1>Rusya</h1>
            </Grid>
            <Grid size={{ md: 3, xs: 12 }}>
                <h1>ABD</h1>
            </Grid>
            <Grid size={{ md: 3, xs: 12 }}>
                <h1>Şili</h1>
            </Grid>
        </Grid> */}

    </>
}

export default Add