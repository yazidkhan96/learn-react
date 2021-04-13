import React, { useState } from "react";
import Dashboard from "../../../../containers/templates/Dashboard";
import axios from "axios";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  TextField,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { ArrowLeft } from "@material-ui/icons";

const UserCreate = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const createUser = (
    nameParams,
    emailParamas,
    phoneParams,
    passwordParams
  ) => {
    setLoading(true);
    axios
      .post(`https://tokoonline.glitch.me/users`, {
        name: nameParams,
        email: emailParamas,
        phone: phoneParams,
        password: passwordParams,
      })
      .then((res) => {
        console.log(res);
        history.push("/");
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <Dashboard>
      <Box mb={2}>
        <Button
          color="primary"
          variant="contained"
          onClick={() => history.goBack()}
        >
          <ArrowLeft />
        </Button>
      </Box>

      <Grid>
        <Box mb={2}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="name"
            variant="outlined"
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="email"
            variant="outlined"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="phone"
            variant="outlined"
            type="number"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="passowrd"
            variant="outlined"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Box>
        <Box>
          <Button
            color="primary"
            fullWidth
            variant="contained"
            onClick={() => createUser(name, email, phone, password)}
          >
            {loading ? <CircularProgress size={20} /> : <span>Create</span>}
          </Button>
        </Box>
      </Grid>
    </Dashboard>
  );
};

export default UserCreate;
