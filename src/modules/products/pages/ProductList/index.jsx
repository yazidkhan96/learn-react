import React, { useEffect, useState } from "react";
import Dashboard from "../../../../containers/templates/Dashboard";
import axios from "axios";
import ProductListCard from "../../organism/ProductListCard";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container, Grid, Modal } from "@material-ui/core";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    top: "6em",
    left: "42%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
const ProductList = () => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const token = localStorage.getItem("jwtToken");
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const [userId, setUserId] = useState(0);

  const getProduct = () => {
    axios
      .get("http://tokoonline.glitch.me/products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setProducts(response.data.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://tokoonline.glitch.me/products/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setShowModal(false);
        getProduct();
      })
      .catch((err) => {
        setShowModal(false);
        console.log(err);
      });
  };
  useEffect(() => {
    getProduct();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <Dashboard>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {products.map((product) => (
            <Grid item xs={6} sm={3} key={product.id}>
              <ProductListCard
                title={product.title}
                images={product.image}
                descripton={product.description}
                price={product.price}
                onDetail={() => history.push(`/product/${product.id}`)}
                onDelete={() => {
                  setShowModal(true);
                  setUserId(product.id);
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Modal
        open={showModal}
        onClose={() => setShowModal((prev) => !prev)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.paper}>
          Apakah anda ingin mengapus data {userId}
          <Button
            color="primary"
            variant="contained"
            onClick={() => handleDelete(userId)}
          >
            Confirmation
          </Button>
          &nbsp;
          <Button
            color="secondary"
            variant="contained"
            onClick={() => setShowModal((prev) => !prev)}
          >
            Cancel
          </Button>
        </div>
      </Modal>
    </Dashboard>
  );
};

export default ProductList;
