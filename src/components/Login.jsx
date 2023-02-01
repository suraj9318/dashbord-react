import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = () => {
    const navigate = useNavigate();
    const initialState = {
        email : '',
        password : ''
    }
    useEffect(()=>{
        const auth  = localStorage.getItem('userData')
        if(auth){
            navigate('/')
        }
        
    },[])

    const [data, setData] = useState(initialState)
    const handleSubmit = async()=>{
        debugger
        if(data.email && data.password){
            const request = await fetch('http://localhost:5000/login',{
            method : 'POST',
            body : JSON.stringify(data),
            headers : {
                'Content-Type' : 'application/json'
            }

        })

        const response = await request.json();
        if(response?.result) {
            toast.error('email or password is incorrect')
        }
        else{
            localStorage.setItem('userData',JSON.stringify(response))
            toast.success('Welcome back');
            navigate('/')
        }
        }
        else{
            toast.error('Please fill all fields')
        }
    }
  return (
   <>
   <form className='form'>
            <h2>Login</h2>
           

            <div className="from-group">
                <label htmlFor='email'>Email</label>
                <input className="form-control" type="email" value={data.email} onChange={(e)=>setData({...data,email:e.target.value})} name="" id="email" />
            </div>

            <div className="from-group">
                <label htmlFor='password'>Password</label>
                <input className="form-control" type="password" value={data.password} onChange={(e)=>setData({...data,password:e.target.value})} name="" id="password" />
            </div>
            <button type='button' className='btn' onClick={ handleSubmit}>Login</button>
        </form>
   </>
  )
}

export default Login
