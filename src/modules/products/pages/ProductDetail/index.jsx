import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });
const ProductDetail = () => {
    const classes = useStyles();
    const [productDetail,setProductDetail] = useState([]);
    const {id} = useParams();
    const token = localStorage.getItem("jwtToken");

    const getProductDetail = () => {
        axios
          .get(`http://tokoonline.glitch.me/products/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            setProductDetail(response.data);
          })
          .catch((error) => {
            console.log("error", error);
          });
      };

    useEffect(() => {
        getProductDetail(id)
    }, [id])// eslint-disable-line react-hooks/exhaustive-deps
    return ( 
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={productDetail.image}
          title={productDetail.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {productDetail.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {productDetail.description}
          </Typography>
          <Typography>
              {productDetail.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
     );
}
 
export default ProductDetail;