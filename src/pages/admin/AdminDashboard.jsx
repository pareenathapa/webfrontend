import React, { useState, useEffect } from 'react'

import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
// import { createProductApi, deleteProductApi, productApi } from '../../api/Api'
import { createJeweleryApi, deleteJeweleryApi, getAllJeweleryApi } from '../../apis/Api'
 
const AdminDashboard = () => {
 
   
    const [jewelerys, setJewelerys] = useState([])
 
    useEffect(() => {
 
        getAllJeweleryApi().then((res) => {
           
            setJewelerys(res.data.jewelerys)
 
        }).catch((error) => {
            console.log(error)
        })
 
 
    }, [])
 
    console.log(jewelerys)
 
 
 
    // Making a state for product
    const [jeweleryName, setJeweleryName] = useState('')
    const [jeweleryPrice, setJeweleryPrice] = useState('')
    const [jeweleryCategory, setJeweleryCategory] = useState('')
    const [jeweleryDescription, setJeweleryDescription] = useState('')
 
    // Image state
    const [jeweleryImage, setJeweleryImage] = useState(null)
    const [previewImage, setPreviewImage] = useState(null)
 
    // function to upload and preview image
    const handleImageUpload = (event) => {
        // 0-File, 1-name, 2-Size
        const file = event.target.files[0]
        setJeweleryImage(file)
        setPreviewImage(URL.createObjectURL(file))
    }
 
    // Delete Product
    const handleDelete = (id) => {
        const confirmDialog = window.confirm("Are you sure want to delete?")
        if(confirmDialog){
            // Delete product
 
            deleteJeweleryApi(id).then((res) => {
                if(res.status === 201){
                    toast.success(res.data.message)
                    window.location.reload()
                }
            }).catch((error) => {
                if(error.response.status === 500){
                    toast.error(error.response.data.message)
                }
 
                else if(error.response.status === 400){
                    toast.error(error.response.data.message)
                }
            })
 
        }
 
    }
 
    // handle submit
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(jeweleryName, jeweleryPrice, jeweleryCategory, jeweleryDescription, jeweleryImage)
 
 
        // make a logical form data
        const formData = new FormData()
        formData.append('jeweleryName', jeweleryName)
        formData.append('jeweleryPrice', jeweleryPrice)
        formData.append('jeweleryCategory', jeweleryCategory)
        formData.append('jeweleryDescription', jeweleryDescription)
        formData.append('jeweleryImage', jeweleryImage)
 
        // make a api call/request
        createJeweleryApi(formData).then((res) => {
            if (res.status === 201) {
                toast.success(res.data.message)
            } else {
                toast.error("Something went wrong in frontend!")
            }
        }).catch((error) => {
 
            if (error.response) {
                if (error.response.status === 400) {
                    toast.error(error.response.data.message)
                }
 
            } else if (error.response.status === 500) {
                toast.error("Internal server error")
            } else {
                toast.error("No response!!")
            }
 
        })
 
    }
 
 
 
    return (
        <>
            <div className='container'>
 
                <div className='d-flex justify-content-between mt-2'>
                    <h2>Admin Dashboard</h2>
 
 
                    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Add
                    </button>
 
 
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Create a new jewelery!</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
 
                                    <form action="">
 
                                        <label>Jewelery Name</label>
                                        <input onChange={(e) => setJeweleryName(e.target.value)} type="text" className='form-control' placeholder='Enter jewelery Name' />
 
                                        <label className='mt-2'>Jewelery Price</label>
                                        <input onChange={(e) => setJeweleryPrice(e.target.value)} type="number" className='form-control' placeholder='Enter jewelery Price' />
 
                                        <div className='mt-2'>
                                            <label>Select Category</label>
                                            <select onChange={(e) => setJeweleryCategory(e.target.value)} className='form-control'>
                                                <option value="All">All</option>
                                                <option value="Earings">Earings</option>
                                                <option value="Bangles">Bangles</option>
                                                <option value="Nose Ring">Nose Ring</option>
                                                <option value="Necklaces">Necklaces</option>
                                                <option value="Rings">Rings</option>
                                               
                                            </select>
                                        </div>
 
                                        <label className='mt-2'>Type Jewelery description</label>
                                        <textarea onChange={(e) => setJeweleryDescription(e.target.value)} className='form-control'></textarea>
 
                                        <label className='mt-2'>Jewelery Image</label>
                                        <input onChange={handleImageUpload} type="file" className='form-control' />
 
                                        {/* Preview Image */}
                                        {
                                            previewImage && (
                                                <div className=''>
                                                    <img src={previewImage} alt="preview image" className='img-fluid rounded object-fit-cover mt-3' />
                                                </div>
                                            )
                                        }
 
                                    </form>
 
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button onClick={handleSubmit} type="button" class="btn btn-primary">Add</button>
                                </div>
                            </div>
                        </div>
                    </div>
 
                </div>
 
                <table className='table mt-3'>
                    <thead className='table-dark'>
                        <tr>
                            <th>Jewelery Image</th>
                            <th>Jewelery Name</th>
                            <th>Jewelery Price</th>
                            <th>Jewelery Category</th>
                            <th>Jewelery Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
 
                        {
                            jewelerys.map((singleProduct) => (
                                <tr>
                                    <td>
                                        <img height={'40px'} width={'40px'} src={`http://localhost:5000/jewelerys/${singleProduct.jeweleryImage}`} alt="" />
                                    </td>
                                    <td>{singleProduct.jeweleryName}</td>
                                    <td>NPR.{singleProduct.jeweleryPrice}</td>
                                    <td>{singleProduct.jeweleryCategory}</td>
                                    <td>{singleProduct.jeweleryDescription}</td>
                                    <td>
                                        <div className='btn-group' role='group'>
                                            <Link to={`/admin/jewelery/update/${singleProduct._id}`} className='btn btn-success'>Edit</Link>
                                            <button onClick={()=> handleDelete(singleProduct._id)} className='btn btn-danger'>Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
 
                    </tbody>
                </table>
 
            </div>
        </>
    )
}
 
export default AdminDashboard
 























































