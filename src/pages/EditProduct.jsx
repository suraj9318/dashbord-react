import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

const EditProduct = () => {

    const initialState = {
        name : '',
        price : null,
        category : '',
        company : '',
        userId : ''
    }
    const [data,setData] = useState(initialState)
        var { id } = useParams();
    
    const getProductById = async() =>{
        const req = await fetch(`http://localhost:5000/getProductById/${id}`,{
            method : 'GET',
        })
        const response =await req.json();
        console.log(response.length)
        if(response.length > 0){
            const [data] = response;
            setData(data);
        }
        else{
            toast.error('something went wrong')
        }
        
    }
        useEffect(()=>{
            getProductById();
        },[])
   
  return (
    <div>
      <form className='form'>
            <h2>Edit Product</h2>
             <input type="hidden" />
            <div className="from-group">
                <label htmlFor='name'>Name</label>
                <input className="form-control" value={data.name} onChange={(e)=>setData({...data,name:e.target.value})} placeholder="Enter product's name" type="text"  name="" id="name" />
            </div>

            <div className="from-group">
                <label htmlFor='price'>Price</label>
                <input className="form-control" type="number" value={data.price} onChange={(e)=>setData({...data,price:e.target.value})}  placeholder="Enter product's price"  name="" id="price" />
            </div>

            <div className="from-group">
                <label htmlFor='category'>Category</label>
                <input className="form-control" type="text" value={data.category} onChange={(e)=>setData({...data,category:e.target.value})} placeholder="Enter category of product"  name="" id="category" />
            </div>

            <div className="from-group">
                <label htmlFor='category'>Company</label>
                <input className="form-control" type="text" value={data.company} onChange={(e)=>setData({...data,company:e.target.value})} placeholder="Enter company name" name="" id="category" />
                <input type="hidden" value={data._id} />
            </div>
            <button type='button' className='btn' >Update</button>
        </form>
    </div>
  )
}

export default EditProduct
