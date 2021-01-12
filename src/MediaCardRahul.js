import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import rr1 from "./resources/rr1.png";

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
  },
  media: {
    height: 220,
  },
});

export default function MediaCardRahul() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={rr1}
          title="Rahul Rajan"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Rahul Rajan
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          MBA <br />
          Experience: 9 Years
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}