import SignIn from "../../modules/auth/pages/Sign in";
import SignUp from "../../modules/auth/pages/Sign up";
import Landing from "../../modules/main/pages/landing";

const AuthRouter = [
  
  {
    path: "/signin",
    label: "Sign in",
    component: SignIn,
  },
  {
    path: "/signup",
    label: "Sign Up",
    component: SignUp,
  },
  {
    path: "/landing",
    label: "Landing Page",
    component: Landing,
  },
];

export default AuthRouter;