import axios from 'axios'
import { useEffect, useState } from 'react'
import { ECOMMERCE_API_URL } from '../../../../config/api'
import { Link } from 'react-router-dom'

function List() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        loadData();
    }, [])


    const loadData = () => {
        axios.get(`${ECOMMERCE_API_URL}categories`)
            .then(response => {
                console.log("response", response)
                setCategories(response.data)
            })
            .catch(error => {
                console.log("error", error)
            })
    }

    const deleteCategory = (id: any) => {

        var result = window.confirm("Want to delete?");
        if (result) {
            axios.delete(`${ECOMMERCE_API_URL}categories/${id}`)
                .then(res => {
                    loadData()
                })
        }
    }


    return <>
        <div>
            <Link to={"/categories/add"}>Add</Link>
        </div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Delete</th>
                    <th>Detail</th>
                    <th>Update</th>
                </tr>
            </thead>
            <tbody>
                {categories.map((category: any) => {
                    return <tr key={category.id}>
                        <td>{category.id}</td>
                        <td>{category.name}</td>
                        <td>{category.description}</td>
                        <td><button onClick={() => deleteCategory(category.id)}>Delete</button></td>
                        <td><Link to={`/categories/${category.id}`}>Detail</Link></td>
                        <td><Link to={`/categories/edit/${category.id}`}>Update</Link></td>

                    </tr>
                })}
            </tbody>
        </table>

    </>
}

export default List