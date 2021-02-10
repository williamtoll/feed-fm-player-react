import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import StationData from './StationData';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'none',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 800,
      height: 800,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }),
);



export default function Stations() {
  const classes = useStyles();

  return (
    <div className={classes.root } >
      <GridList cellHeight={180} className={classes.gridList} cols={4}>
        <GridListTile key="Subheader" cols={4} style={{ height: 'auto' }}>
          <ListSubheader component="div">Recommended</ListSubheader>
        </GridListTile>
        {StationData.map((station) => (
          <GridListTile key={station.img}>
            <img src={station.img} alt={station.title} />
            <GridListTileBar
              title={station.title}
              subtitle={<span>by: {station.author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${station.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}