import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import rr1 from "./resources/ds1.jpg";

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
  },
  media: {
    height: 220,
  },
});

export default function MediaCardDurgesh() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={rr1}
          title="Durgesh Shukla"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Durgesh Shukla
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          B.Tech (DCE Delhi) <br />
          Experience: 7 Years
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}