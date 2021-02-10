import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Player from './Player';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { BottomNavigation, BottomNavigationAction, Menu } from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Header from './Header';
import Stations from './Stations';
import StationsPhone from './StationsPhone';


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
      <Player data-testid="player-component" />

      <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
        <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Browse" value="browse" icon={<FolderIcon />} />
        <BottomNavigationAction label="Playlist" value="playlist" icon={<AddBoxIcon />} />

      </BottomNavigation>
    </div>
  );
}

export default App;
