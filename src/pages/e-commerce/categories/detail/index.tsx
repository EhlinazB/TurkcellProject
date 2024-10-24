import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ECOMMERCE_API_URL } from '../../../../config/api';

function Detail() {

  const [detail, setdetail] = useState<any>({})
  const { id } = useParams();
  const navigate = useNavigate()


  useEffect(() => {

    axios.get(`${ECOMMERCE_API_URL}categories/${id}`)
      .then(res => {
        setdetail(res.data)
      })
      .catch(err => {
        console.log("err", err)
      })

  }, [])


  return <>
    <h1>Detail</h1>
    <hr />
    <button onClick={() => navigate("/categories")}>Go List!</button>
    <button onClick={() => navigate(-1)}>Go Back!</button>

    <hr />
    <h1>Id: {detail.id}</h1>
    <h1>Name: {detail.name}</h1>
    <h1>Descriptin: {detail.description}</h1>
  </>
}

export default Detail