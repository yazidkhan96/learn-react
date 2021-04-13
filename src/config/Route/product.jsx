import { Ballot} from "@material-ui/icons";
import ProductCreate from "../../modules/products/pages/ProductCreate";
import ProductDetail from "../../modules/products/pages/ProductDetail";
import ProductList from "../../modules/products/pages/ProductList"

const ProductsRouter = [
  {
    path: "/products",
    label: "Product List",
    component: ProductList,
    isMenu: true,
    icon:Ballot
  },
  {
    path: "/product/create",
    label: "Product Create",
    component: ProductCreate,
  },
  {
    path: "/product/:id",
    label: "Product Detail",
    component: ProductDetail,
  },
 
];

export default ProductsRouter;