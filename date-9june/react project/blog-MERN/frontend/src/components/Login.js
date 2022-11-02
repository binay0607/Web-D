import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import axios from 'axios'

const Auth = () => {
  const [isSignUp, setisSignUp]= useState(false);
  const [inputs, setInputs] = useState({
    name:"", email:"",password:""
  });
  const handleChange= (e)=>{
    setInputs((prevState)=>({
      ...prevState, 
      [e.target.name]: e.target.value
    }))
  }  
  const sendRequest=async ()=>{
    const res= await axios.post("http://localhost:5000/api/user/login", {
      email: inputs.email,
      password: inputs.password
    }).catch(err=> console.log(err));

    const data= await res.data;
    return data;
  }

  const handleSubmit= (e)=>{
    e.preventDefault();
    console.log(inputs);
    sendRequest();
  }   
  return (
    <div>
      <form onSubmit={handleSubmit}>
       <Box maxWidth={'400px'} display={'flex'} flexDirection='column' alignItems={'center'} justifyContent={'center'} boxShadow="10px 10px 20px #ccc" padding={3} margin='auto' marginTop={5} borderR={5} >
        <Typography variant='h3' padding={3} textAlign='center'>
          {isSignUp? "Sign-Up" : "Log-In"}
        </Typography>
        {isSignUp && <TextField name='name' onChange={handleChange} value={inputs.name} margin='normal' placeholder='Name'></TextField>}
        <TextField name='email' onChange={handleChange} value={inputs.email} type={'email'} margin='normal' placeholder='Email'></TextField>
        <TextField name='password' onChange={handleChange} value={inputs.password} type={'password'} margin='normal' placeholder='Password'></TextField>
        <Button type='submit' variant='contained' sx={{borderRadius: 3 ,marginTop: 5}} color='warning'>Submit</Button>
        <Button onClick={()=>setisSignUp(!isSignUp)} sx={{borderRadius: 3,marginTop: 3}} >
          Try {isSignUp? "Log-In" : "Sign-Up"}
          </Button>
       </Box>
      </form>
    </div>
  )
}

export default Auth