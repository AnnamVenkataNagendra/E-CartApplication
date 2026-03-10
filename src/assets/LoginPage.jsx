
import React, { useContext, useState } from 'react'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom'

import { userContext } from './AuthContext';
const LoginPage = () => {

    const[getName, setName]=useState('')

    const [getPwd,setPwd]=useState('')

     const{login}=userContext()

    const navigate=useNavigate()

    const loginSubmit=async(e)=>{
   
       e.preventDefault();

      try{
     var req=await axios.post('http://localhost:9090/user/login',{
           
            cName:getName,
            cPwd:getPwd
        },{
            headers:{ "Content-Type" : "application/json" }
        })
       
        if (req.data) {
        login(req.data);      
        navigate('/dashboard');
        alert('User valied')
      } else {
        alert('Invalid credentials');
      }
        setName('')
        setPwd('')
        console.log('data')
      }
      catch(e){
        console.log('Api error',e)
        alert('Login failed')
      }
      

    }

  return (
   <div className="d-flex justify-content-center mt-5 w-50 p-4">
      <div className="w-50 p-4 rounded-4 bg-light shadow">
       <form onSubmit={loginSubmit}>
         <h2 className="text-center">
           <i className='bi bi-person text-danger'> User Login</i>
        </h2>
           
           <dl>
            <dt>User Name</dt>
            <dd><input type='text' placeholder='enter name' className='form-control shadow' value={getName}
            onChange={(e)=>{setName(e.target.value)}}/></dd>
           </dl>


           <dl>
            <dt>User Password</dt>
            <dd><input type='password' placeholder='enter pass' className='form-control shadow'  value={getPwd}
            onChange={(e)=>{setPwd(e.target.value)}}/></dd>
           </dl>

           <button className='w-100 btn btn-primary' type='submit'>Login</button>
        
       </form>
       <h6 className='mt-3'>New user? Register here:</h6>
       <Link  to='/register'>Register</Link>
      </div>    
    </div>
  )
}

export default LoginPage