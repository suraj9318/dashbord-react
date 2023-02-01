import React, { useState } from 'react'


const SignUp = () => {
    const initialState = {
        name : '',
        email : '',
        password : ''
    }
    const [data, setData] = useState(initialState);
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.table(data);
    }
  return (
    <div>
        <form className='form'>
            <h2>Singup</h2>
            <div className="from-group">
                <label htmlFor='name'>Name</label>
                <input className="form-control" value={data.name} onChange={(e)=> setData({...data,name:e.target.value})} type="text" id="name" />
            </div>

            <div className="from-group">
                <label htmlFor='email'>Email</label>
                <input className="form-control" value={data.email}  onChange={(e)=> setData({...data,email:e.target.value})} type="email" name="" id="email" />
            </div>

            <div className="from-group">
                <label htmlFor='password'>Password</label>
                <input className="form-control" value={data.password}  onChange={(e)=> setData({...data,password:e.target.value})} type="password" name="" id="password" />
            </div>
            <button className='btn' onClick={(e)=> handleSubmit(e)}>Sign up</button>
        </form>
    </div>
  )
}

export default SignUp
