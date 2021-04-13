import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Dashboard from "../../../../containers/templates/Dashboard";
import { Box, Button, CircularProgress, Grid, TextField } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import { ArrowLeft } from '@material-ui/icons';


const UserUpdate = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [password,setPassword] = useState('');
  const [loading,setLoading] = useState(false);
  const history = useHistory();
  const {id} = useParams();

  const updateUser = (nameParams,emailParamas,phoneParams,passwordParams) => {
      setLoading(true);
      axios.put(`https://tokoonline.glitch.me/users/${id}`, {
        name:nameParams,
        email:emailParamas,
        phone:phoneParams,
        password:passwordParams
      }).then(res =>{
          console.log(res)
          history.push("/");
          setLoading(false);
      }).catch(err => {
        setLoading(false)
          console.log(err)
      })
  }

  const getUserDetail = (userId) =>{
    axios.get(`https://tokoonline.glitch.me/users/${userId}`).then(response => {
        setName(response.data.name);
        setEmail(response.data.email);
        setPhone(response.data.phone);
        setPassword(response.data.password);
    }).catch(err => {
        console.log(err)
    })
}

useEffect(() => {
   getUserDetail(id);
}, [id])
  return (
      <Dashboard>
         <Box mb={2}>
         <Button color="primary" variant="contained" onClick={() => history.goBack()}>
             <ArrowLeft/>
         </Button>
         </Box>
        
        <Grid>
        <Box mb={2}>
        <TextField fullWidth id="outlined-basic" value={name} label="name" variant="outlined" type="text" onChange={(e) => {
            setName(e.target.value);
        }} />
        </Box>
        <Box mb={2}>
        <TextField fullWidth id="outlined-basic" value={email}  label="email" variant="outlined" type="email" onChange={(e) => {
            setEmail(e.target.value);
        }}/>
        </Box>
        <Box mb={2}>
        <TextField fullWidth id="outlined-basic" value={phone} label="phone" variant="outlined" type="number" onChange={(e) => {
            setPhone(e.target.value);
        }}/>
        </Box>
        <Box mb={2}>
        <TextField fullWidth id="outlined-basic" value={password} label="passowrd" variant="outlined" type="password" onChange={(e) => {
            setPassword(e.target.value);
        }}/>
        </Box>
        <Box>
        <Button color="primary" fullWidth variant="contained" onClick={() => updateUser(name,email,phone,password)}>
            {
                loading ? <CircularProgress size={20}/> : <span>Update</span>
            }
         </Button>
        </Box>
        </Grid>
    </Dashboard>
  );
}


export default UserUpdate;