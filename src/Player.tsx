import React, { useEffect, useState } from "react";
import { Button, Box } from "@material-ui/core";
//@ts-ignore
import Feed from "feed-media-audio-player";
import { IconButton } from "@material-ui/core";
import { Theme, createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Grid } from "@material-ui/core";
import SkipNextIcon from '@material-ui/icons/SkipNext';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        details: {
            display: 'flex',
            flexDirection: 'column',
        },
        content: {
            flex: '1 0 auto',
        },
        cover: {
            width: 151,
        },
        controls: {
            display: 'flex',
            alignItems: 'center',
            paddingLeft: theme.spacing(1),
            paddingBottom: theme.spacing(1),
        },
        stationInfo: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingLeft: theme.spacing(1),
            paddingBottom: theme.spacing(1),
        },
        favoriteIcon: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingLeft: theme.spacing(1),
            paddingBottom: theme.spacing(1),
        },
        IconSize: {
            height: 38,
            width: 38,
        },
        IconSize24x24: {
            height: 24,
            width: 24,
        },
    }),
);

function Player() {
    const classes = useStyles();
    const [playing,isPlaying]=useState(false);

    var player = new Feed.Player("demo", "demo");
    player.on('play-started', function(){
        console.log("play started")
        isPlaying(true)
    });

    useEffect(() => {
        var playerView = new Feed.PlayerView("player-view-div", player);
        player.tune();
    });

    return (
        <Box component="span" m={1}>
            <h4>Feed FM Player</h4>
            {playing===true?'Playing':""}
            <div id="player-view-div">
                <Grid container className={classes.root} spacing={1}>
                    <Grid item sm={12} xs={12} lg={12} className={classes.stationInfo}>
                        <div className="status"></div>
                    </Grid>
                </Grid>
                <IconButton aria-label="play/pause" className="play-button">
                    <PlayCircleOutlineIcon className={classes.IconSize} />
                </IconButton>
                <IconButton aria-label="pause" className="pause-button">
                    <PauseCircleOutlineIcon className={classes.IconSize} />
                </IconButton>

                <IconButton aria-label="skip" className="skip-button">
                    <SkipNextIcon className={classes.IconSize} />
                </IconButton>
                <IconButton aria-label="" className="favorite">
                    <FavoriteBorderIcon className={classes.IconSize24x24} />
                </IconButton>
            </div>

        </Box>
    );
}

export default Player;
