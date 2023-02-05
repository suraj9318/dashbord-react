import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import {FaTrashAlt, FaEye} from 'react-icons/fa'
import { Link } from 'react-router-dom';
const Products = () => {
    const [products,setProducts] = useState([]);
    const [error,setError] = useState(false)
    const getAllProducts = async() =>{
        const request =await fetch('http://localhost:5000/get-products');
        const response = await request.json();
        if(response.response === 'no data found'){
            toast.error('No Product Found')
        }
        else{
            setProducts(response);
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
    
        if(response.deletedCount === 1){
            toast.success('product deleted');
            getAllProducts()
        }
        else{
            toast.error('something went wrong !!')
        }
    }

    const handleSearch = async(e) =>{
        let key  = e.target.value
        if(key){
            const request = await fetch(`http://localhost:5000/search/${key}`,{
                method :"GET",
            })
            const result = await request.json();
            if(result.result === "no result found"){
                setError(true)
            }else{
                setError(false)
                setProducts(result);
            }
        }
        else{
            getAllProducts()
        }
    }
  return (
    <>
    <div className="table-container">
            <h2 className='products-heading'>Products</h2>
            
        <div className="serch-container">
            <input type="text" className='search-input'  onChange={(e)=>handleSearch(e)} placeholder='Search ...'/>
        </div>
    <table className='table'>
        <thead>
            <th>S.No</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Company</th>
            <th>Operations</th>
        </thead>
       
        {error ? <h2 style={{textAlign:'center'}}>No Result found</h2> :
        <tbody>
        {
            
            products.map((item,index)=>{
            return (<><tr key={item._id}>
            <td>{index+1}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.category}</td>
            <td>{item.company}</td>
            <td  >
                
                <FaTrashAlt className='trash' onClick={()=>deleteProduct(item._id)} />
                <Link to={`/update/${item._id}`}><FaEye className='update-icon'/></Link>
            </td>
            </tr>
            </>)
        })}
            
        </tbody>
         }
    </table>
    </div>
    </>
  )
}

export default Products
