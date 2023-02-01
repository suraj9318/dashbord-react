import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const SignUp = () => {
    const navigate = useNavigate()
    const initialState = {
        name : '',
        email : '',
        password : ''
    }
    const [data, setData] = useState(initialState);
    const handleSubmit =async ()=>{

        const result = await fetch('http://localhost:5000/register',{
        method : 'POST',
        body :JSON.stringify(data),
        headers : {
            'Content-Type' : 'application/json'
        }
       })
       const response = await result.json();
        localStorage.setItem('userData',JSON.stringify(response))
        toast.success('signup successfully');
        navigate('/')
    }
    useEffect(()=>{
        const auth  = localStorage.getItem('userData')
        if(auth){
            navigate('/')
        }
        
    },[])
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
            <button type='button' className='btn' onClick={ handleSubmit}>Sign up</button>
        </form>
    </div>
  )
}

export default SignUp
