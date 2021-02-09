import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Player from './Player';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));
function App() {

  const classes = useStyles();



  return (
    <div className="App">
      {/* <Grid container className={classes.root} spacing={2}>
      <Grid item sm={6} xs={12} lg={12}>
        <Grid container justify="center" spacing={2}>
            <Grid>
              <Paper className={classes.paper} />
            </Grid>
        </Grid>
      </Grid>
    </Grid> */}
      <h4>Feed FM Player</h4>
      <Player />
     
    </div>
  );
}

export default App;
