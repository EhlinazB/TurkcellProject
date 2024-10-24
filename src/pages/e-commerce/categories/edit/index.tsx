import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ECOMMERCE_API_URL } from '../../../../config/api'

function Edit() {

  const [name, setname] = useState<string>("")
  const [description, setdescription] = useState<string>("")

  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {

    axios.get(`${ECOMMERCE_API_URL}categories/${id}`)
      .then(res => {
        setname(res.data.name)
        setdescription(res.data.description)
      })
      .catch(err => {
        console.log("err", err)
      })

  }, [])


  const edit = () => {
    let updatedCategory = {
      name,
      description
    }

    axios.put(`${ECOMMERCE_API_URL}categories/${id}`, updatedCategory)
      .then(res => {
        navigate("/categories")
      })

  }


  return <>
    <div>
      <label htmlFor="">Name:</label>
      <input type='text' value={name} onChange={(e) => setname(e.target.value)} />
    </div>
    <div>
      <label htmlFor="">Description:</label>
      <input type='text' value={description} onChange={(e) => setdescription(e.target.value)} />
    </div>
    <div>
      <button onClick={edit}>Edit</button>
    </div>
  </>
}

export default Edit