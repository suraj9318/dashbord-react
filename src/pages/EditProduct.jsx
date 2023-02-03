import React from 'react'

const EditProduct = () => {
  return (
    <div>
      <form className='form'>
            <h2>Edit Product</h2>
             <input type="hidden" />
            <div className="from-group">
                <label htmlFor='name'>Name</label>
                <input className="form-control"  placeholder="Enter product's name" type="text"  name="" id="name" />
            </div>

            <div className="from-group">
                <label htmlFor='price'>Price</label>
                <input className="form-control" type="number"  placeholder="Enter product's price"  name="" id="price" />
            </div>

            <div className="from-group">
                <label htmlFor='category'>Category</label>
                <input className="form-control" type="text" placeholder="Enter category of product"  name="" id="category" />
            </div>

            <div className="from-group">
                <label htmlFor='category'>Company</label>
                <input className="form-control" type="text"  placeholder="Enter company name" name="" id="category" />
            </div>
            <button type='button' className='btn' >Update</button>
        </form>
    </div>
  )
}

export default EditProduct
