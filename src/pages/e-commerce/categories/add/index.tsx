import axios from 'axios'
import  { useState } from 'react'
import { ECOMMERCE_API_URL } from '../../../../config/api'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'

function Add() {

  const [name, setname] = useState<string>("")
  const [description, setdescription] = useState<string>("")

  const navigate = useNavigate()


  const add = () => {

    let newCategory = {
      name: name,
      description: description
    }

    axios.post(`${ECOMMERCE_API_URL}categories`, newCategory)
      .then(res => {
        alert("Success!")
        navigate("/categories")
      })
  }

  return <>
    <div>
      <label htmlFor="">Name:</label>
      <input type='text' onChange={(e) => setname(e.target.value)} />
    </div>
    <div>
      <label htmlFor="">Description:</label>
      <input type='text' onChange={(e) => setdescription(e.target.value)} />
    </div>
    <div>
      <Button color="success" variant="contained" onClick={add}>Add</Button>
    </div>
  </>
}

export default Add