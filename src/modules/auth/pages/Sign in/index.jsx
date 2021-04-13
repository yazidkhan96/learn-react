import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Copyright from '../../organism/Copyright';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { loginFetch, loginReset } from '../../../../config/redux/auth/action';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from 'react';
import { authActionSelector } from '../../../../config/redux/auth/selector';
import { authError } from '../../../../config/redux/auth/selector';

import * as at from '../../../../config/redux/auth/type'
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const validationSchema = yup.object({
  email: yup
    .string()
    .required("Harus di isi")
    .min(5, "minimal 5")
    .matches(/^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Format email tidak valid"),
});
const SignIn = () => {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(validationSchema)
  });
  // const [isLogin,setIslogin] = useContext(RootContext); // USE REACT HOOK CONTEXT
  
  const history = useHistory();
  const dispatch = useDispatch();
  const authActionState = useSelector(authActionSelector)
  const error = useSelector(authError)
  // const handleLogin = async (data) => {

  //   try {
  //     const res = await loginService(data);
  //     dispatch(updateToken(res.accessToken))
  //     localStorage.setItem('jwtToken', res.accessToken);
  //     history.replace("/users");

  //   } catch (error) {
  //     console.log("gagal login",error)
  //   }
  // }
  const handleLogin = (data) => dispatch(loginFetch(data));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleLoginReset = () => dispatch(loginReset())
  
  useEffect(() => {
   handleLoginReset();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
// watcher
useEffect(() => {
if(authActionState === at.loginSuccess){
  history.replace("/users")
}
if(authActionState === at.loginFailed){
  alert("gagal login",error)
  handleLoginReset()
}

},[authActionState, error, handleLoginReset, history]);

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmit(handleLogin)}
        >
             <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              inputRef={register}
            />
            {errors?.email && <div>{errors?.email?.message}</div>}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="password"
              inputRef={register}
            />
            {errors?.password && <div>{errors?.password?.message}</div>}

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright children="YazidAkbar"/>
            </Box>
        </form>
          </div>
      </Grid>
    </Grid>
  );
}

export default SignIn;