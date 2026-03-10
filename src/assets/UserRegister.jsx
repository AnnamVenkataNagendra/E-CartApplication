
import axios from 'axios'
import React, { useState } from 'react'
import { Link } from  'react-router-dom'

const UserRegister = () => {

    const[getName, setName]=useState('')
    const[getEmail, setEmail]=useState('')
    const[getPwd, setPwd]=useState('')
    const[getRole, setRole]=useState('')

    const newuserRegister=async(e)=>{

        e.preventDefault()

        try{

            let req=await axios.post('http://localhost:9090/user/register',{
                cName:getName,
                cEmail:getEmail,
                cPwd:getPwd,
                cRole:getRole
            },{headers:{'Content-Type':'application/json'}})
         
            alert('user data saved')
            console.log(req.data)
            setName('')
            setEmail('')
            setPwd('')
            setRole('')
        }
        catch(e){
            console.log('Api problem')
            alert('try again after some time')
        }

    }
  return (
    <div className="d-flex justify-content-center mt-5 w-50 p-4">
      <div className="w-50 p-4 rounded-4 bg-light shadow">
       <form onSubmit={newuserRegister}>
        <h4 className='text-danger text-center'>User Register</h4>
           
           <dl>
            <dt>User Name</dt>
            <dd><input type='text' placeholder='enter name' className='form-control shadow' value={getName}
           onChange={(e)=>{setName(e.target.value)}} /></dd>
           </dl>


           <dl>
            <dt>User Email</dt>
            <dd><input type='text' placeholder='enter email' className='form-control shadow' value={getEmail}
           onChange={(e)=>{setEmail(e.target.value)}}/></dd>
           </dl>

           
           <dl>
            <dt>User Password</dt>
            <dd><input type='password' placeholder='enter password' className='form-control shadow' value={getPwd}
           onChange={(e)=>{setPwd(e.target.value)}}/></dd>
           </dl>

            <dl>
            <dt>User Role</dt>
            <dd><input type='text' placeholder='enter role' className='form-control shadow'value={getRole}
           onChange={(e)=>{setRole(e.target.value)}}/></dd>
           </dl>

           <button className='w-100 btn btn-primary' type='submit'>Register</button>

       </form>
       <h6>Login</h6>
       <Link to='/'>Login</Link>
      </div>
    </div>
  )
}

export default UserRegister
