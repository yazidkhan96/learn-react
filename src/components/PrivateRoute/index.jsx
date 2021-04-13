import { Redirect, Route } from "react-router";

const PrivateRoute = (props) => {
    return ( 
        <Route
        path={props.path}
        exact
       render={() => {
         return  props.isLogin ? <props.component/> : <Redirect to="/signin"/>
       }}
      />
     );
}
 
export default PrivateRoute;