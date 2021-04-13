import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import { Box, Button, CircularProgress, Modal } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Dashboard from "../../../../containers/templates/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { tokenSelector } from "../../../../config/redux/auth/selector";
import { userActionSelector, userLoadingSelector, userSelector } from "../../../../config/redux/user/selector";
import { userDeleteFetch, userFetch } from "../../../../config/redux/user/action";
import * as actionType from '../../../../config/redux/user/type'
const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  paper: {
    position: "absolute",
    top: "6em",
    left: "40%",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const UserList = () => {
  const classes = useStyles();
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const [userId, setUserId] = useState(0);
  const token = useSelector(tokenSelector);
  const dispatch = useDispatch();
  const usersActionState = useSelector(userActionSelector)
  const users = useSelector(userSelector);
  const userLoading = useSelector(userLoadingSelector);

  // const randomState = useSelector((state) => state.random); // jika ingin memilih state secara spesifik

  const handleUsersFetch = () => dispatch(userFetch());
  const handleUserDeletesFetch = (id) => dispatch(userDeleteFetch({id}));

// watcher
  useEffect(() => {
    handleUsersFetch();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if(userActionSelector === actionType.userDeleteSuccess ){
      handleUsersFetch();
      setShowModal(false);
    }
    if(userActionSelector === actionType.userDeleteFailed ){
     alert("gagal menghapus");
     setShowModal(false);
    }

  }, [handleUsersFetch]);
  const deleteUser = (id) => {
    axios
      .delete(`https://tokoonline.glitch.me/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setShowModal(false);
        handleUsersFetch();
      })
      .catch((err) => {
        console.log(err);
        setShowModal(false);
      });
  };
  return (
          <Dashboard>
            <Box mb={2}></Box>
            <TableContainer component={Paper}>
              {userLoading ? (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CircularProgress color="primary" />
                </div>
              ) : (
                <Table
                  className={classes.table}
                  size="small"
                  aria-label="a dense table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>Nama</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Phone</TableCell>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell component="th" scope="row">
                          {user.name}
                        </TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>
                          <Button
                            color="primary"
                            variant="contained"
                            onClick={() => history.push(`users/${user.id}`)}
                          >
                            Edit
                          </Button>
                          <Button
                            color="secondary"
                            variant="contained"
                            onClick={() => {
                              setUserId(user.id);
                              setShowModal(true);
                            }}
                          >
                            Delete
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </TableContainer>
            <Modal
              open={showModal}
              onClose={() => setShowModal((prev) => !prev)}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              <div className={classes.paper}>
                Apakah anda yakin akan menghapus user Id : {userId}
                <Button onClick={() => handleUserDeletesFetch(userId)}>Confirmation</Button>
                <Button onClick={() => setShowModal((prev) => !prev)}>
                  Cancel
                </Button>
              </div>
            </Modal>
          </Dashboard>
  );
};

export default UserList;
