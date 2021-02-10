import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Player from './Player';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { BottomNavigation, BottomNavigationAction, Menu } from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Header from './Header';
import Stations from './Stations';
import StationsPhone from './StationsPhone';
import PlayerCard from './PlayerCard';

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
  const [value, setValue] = React.useState('recents');
  const handleChange = (event:any, newValue:any) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <Header />
      <Grid container className={classes.root} spacing={2}>
        <Grid item sm={6} xs={12} lg={3}>

        </Grid>
        <Grid item sm={6} xs={12} lg={6} className="webGlobal">
          <Stations  />
        </Grid>
        <Grid item sm={6} xs={12} lg={6} className="mobileGlobal">
          <StationsPhone  />
        </Grid>
        <Grid item sm={6} xs={12} lg={3}>

        </Grid>
      </Grid>
      <h4>Feed FM Player</h4>
      <Player />
      <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
        <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
        <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
      </BottomNavigation>
    </div>
  );
}

export default App;
