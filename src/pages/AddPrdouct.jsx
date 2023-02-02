import React, { useState } from 'react'
import { toast } from 'react-toastify';

const AddPrdouct = () => {
  
  const user = JSON.parse(localStorage.getItem('userData'));
  const initialState = {
    name : '',
    price : null,
    category :'',
    company : '',
    userId : user[0]._id
  }
const [data, setData] = useState(initialState)
  

  const handleSubmit =async()=>{
    if(data.name && data.price && data.category && data.company ){
      const request = await fetch('http://localhost:5000/add-product',{
      method :'POST',
      body : JSON.stringify(data),
      headers : {
        'Content-Type' : 'application/json'
    }
  })
      const response =request.json();
      toast.success('Product added');
      setData(initialState)
    }
    else{
      toast.error('Please fill all fields')
    }

  }
  return (
    <>
    <form className='form'>
            <h2>Add Product</h2>
             <input type="hidden" />
            <div className="from-group">
                <label htmlFor='name'>Name</label>
                <input className="form-control" value={data.name} onChange={(e)=>setData({...data,name:e.target.value})} placeholder="Enter product's name" type="text"  name="" id="name" />
            </div>

            <div className="from-group">
                <label htmlFor='price'>Price</label>
                <input className="form-control" type="number"  value={data.price} onChange={(e)=>setData({...data,price:e.target.value})} placeholder="Enter product's price"  name="" id="price" />
            </div>

            <div className="from-group">
                <label htmlFor='category'>Category</label>
                <input className="form-control" type="text"  value={data.category} onChange={(e)=>setData({...data,category:e.target.value})} placeholder="Enter category of product"  name="" id="category" />
            </div>

            <div className="from-group">
                <label htmlFor='category'>Company</label>
                <input className="form-control" type="text"  value={data.company} onChange={(e)=>setData({...data,company:e.target.value})} placeholder="Enter company name" name="" id="category" />
            </div>
            <button type='button' className='btn' onClick={ handleSubmit}>Submit</button>
        </form>
    </>
  )
}

export default AddPrdouct
