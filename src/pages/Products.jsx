import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import {FaTrashAlt} from 'react-icons/fa'
const Products = () => {
    const [products,setProducts] = useState([]);
    const getAllProducts = async() =>{
        const request =await fetch('http://localhost:5000/get-products');
        const response = await request.json();
        if(response.response === 'no data found'){
            toast.error('No Product Found')
        }
        else{
            setProducts(response);
            console.log(response)
        }
    }

    useEffect(()=>{
        getAllProducts();
    },[])

    const deleteProduct = async(id) =>{
        const req =await fetch(`http://localhost:5000/delete-product/${id}`,{
            method : 'DELETE'
        })
        const response =await req.json()
        console.log(response);

        if(response.deletedCount === 1){
            toast.success('product deleted');
            getAllProducts()
        }
        else{
            toast.error('something went wrong !!')
        }
    }
  return (
    <>
    <div className="table-container">
            <h2 className='products-heading'>Products</h2>
    <table className='table'>
        <thead>
            <th>S.No</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Company</th>
            <th>Delete</th>
        </thead>
        <tbody>
        {
            products.map((item,index)=>{
            return (<>
            <tr key={item.id}>
            <td>{index+1}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.category}</td>
            <td>{item.company}</td>
            <td className='trash' onClick={()=>deleteProduct(item._id)}><FaTrashAlt/></td>
            </tr>
            </>)
        })}
            
        </tbody>
    </table>
    </div>
    </>
  )
}

export default Products
