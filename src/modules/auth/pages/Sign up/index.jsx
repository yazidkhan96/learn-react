import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Copyright from "../../organism/Copyright";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerService } from "../../../../service/auth";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const validationSchema = yup.object({
  name: yup
    .string()
    .required("Harus di isi")
    .min(5, "minimal 5")
    .max(20, "max 20"),
  email: yup
    .string()
    .required("Harus di isi")
    .min(5, "minimal 5")
    .matches(/^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Format email tidak valid"),
  password: yup.string().required("Harus di isi").min(8, "minimal 8"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const SignUp = () => {
  const classes = useStyles();
  const { register, handleSubmit, reset, errors,formState } = useForm({
    resolver: yupResolver(validationSchema), mode: "onChange"
  });

  const handleRegister = async (data) => {
    try{
       await registerService(data);
      reset();
    }catch(error) {
      console.log("error",error)
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmit(handleRegister)}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="username"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Username"
                autoFocus
                inputRef={register}
              />
              {errors?.name && <div>{errors?.name?.message}</div>}
            </Grid>
            {console.log(errors)}
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="phone"
                label="Phone"
                name="phone"
                autoComplete="Phone"
                type="phone"
                inputRef={register}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                type="email"
                inputRef={register}
              />
              {errors?.email && <div>{errors?.email?.message}</div>}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
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
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="passwordConfirmation"
                label="Password Confirmation"
                type="password"
                id="passwordConfirmation"
                autoComplete="passwordConfirmation"
                inputRef={register}
              />
              {errors?.passwordConfirmation && (
                <div>{errors?.passwordConfirmation?.message}</div>
              )}
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={!formState.isValid}
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright children="Yazid Akbar" />
      </Box>
    </Container>
  );
};

export default SignUp;
