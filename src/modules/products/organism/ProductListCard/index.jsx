import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    position:"relative"
  },
  media: {
    height: 140,
  },
  buttonPostion: {
    backgroundColor:'#3a6351',
    position: 'absolute',
    top: -4,
    right: 0,
    color: '#fff',
    borderRadius: '9px',
    zIndex:999
  },
});

const PostListCard = ({ title, descripton, images,price,onDetail,onDelete}) => {
  const classes = useStyles();
  const history = useHistory()
  return (
    <Card className={classes.root}>
        <Button color="primary"  className={classes.buttonPostion} onClick={() => history.push("/product/create")}>+</Button>

      <CardActionArea >
        <CardMedia
          className={classes.media}
          image={images}
          onClick={onDetail}
          title={title}
        />
        <CardContent>
          <div style={{ width: 300, whiteSpace: "pre" }}>
            <Box
              component="div"
              my={2}
              textOverflow="ellipsis"
              overflow="hidden"
            >
              <Typography gutterBottom variant="h5" component="h2">
                {title}...
              </Typography>
            </Box>
          </div>
          <div style={{ whiteSpace: "pre" }}>
            <Box
              component="div"
              my={2}
              textOverflow="ellipsis"
              overflow="hidden"
            >
              <Typography variant="body2" color="textSecondary" component="p">
                {descripton}
              </Typography>
              <Typography>
                {price}
              </Typography>
            </Box>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="small" color="primary" variant="contained">
          Edit
        </Button>
        <Button size="small" color="secondary" variant="contained" onClick={onDelete}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default PostListCard;
