import AuthRouter from "./auth"
import ProductsRouter from "./product";
import UserRouter from "./user";
const authenticatedRoutes = [
 ...UserRouter,
 ...ProductsRouter
];

const unAuthenticatedRoutes = [
    ...AuthRouter,
];

export {authenticatedRoutes,unAuthenticatedRoutes};