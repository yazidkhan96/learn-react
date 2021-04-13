import { useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './components';
import { tokenSelector } from './config/redux/auth/selector';
import { authenticatedRoutes, unAuthenticatedRoutes } from './config/Route';
const Router = () => {
    const token = useSelector(tokenSelector)
    return ( 
        <BrowserRouter>
        <Switch>
          {
            unAuthenticatedRoutes.map((url, i) => {
              return <Route key={i} path={url.path} exact component={url.component} />
            })
          }
          {
            authenticatedRoutes.map((url, i) => {
              return <PrivateRoute key={i} path={url.path} component={url.component} isLogin={!!token} exact />
            })
          }
        </Switch>
      </BrowserRouter>
     );
}
 
export default Router;