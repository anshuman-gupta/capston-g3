import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import axios from 'axios'
// axios.defaults.withCredentials =true;

const  Login = () => {

    const navigate = useNavigate()
    const [user,setUser] = useState({
        email:'',
        password:''
    })

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log('login Success');
        // axios.post('http://localhost:3001/api/v1/login/',user)
        //      .then((res)=>{
        //         navigate('/products')
        //      })
        //      .catch((error)=>{
        //         navigate('/unauthorized')
        //      })
    }

  return (
    <div className='signup-container'>

        <div className='title'>
                <h1>Login Page</h1>
                <div className='title-underline'></div>
        </div>
        <div className='form-container'>
            <form className='form-signup' onSubmit={handleSubmit}>
                <div className='input-container'>
                    <label>Email</label>
                    <input type="text" name='Email' className='input-box' 
                    onChange={(e)=>{setUser({...user,email:e.target.value})}}></input>
                </div>
                <div className='input-container'>
                    <label>Password</label>
                    <input type="password" name='password' className='input-box' 
                    onChange={(e)=>{setUser({...user,password:e.target.value})}}></input>
                </div>

                <button type='submit' className='btn btn-dark'>login</button>
            </form>
        </div>
    </div>
  )
}


export default Login;