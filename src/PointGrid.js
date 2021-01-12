import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}));

const message3 = `Great Support `;
const message2 = `Amazing Teachers`;
const message1 = `Online Courses`;

export default function PointGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>O</Avatar>
          </Grid>
          <Grid item xs>
            <Typography>{message1}</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>A</Avatar>
          </Grid>
          <Grid item xs>
            <Typography>{message2}</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>G</Avatar>
          </Grid>
          <Grid item xs>
            <Typography>{message3}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}