import React, { useEffect, useState } from "react";
import { Button, Box } from "@material-ui/core";
//@ts-ignore
import Feed from "feed-media-audio-player";
import PlayerCard from "./PlayerCard";
import { IconButton } from "@material-ui/core";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
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
            justifyContent: 'flex-end',
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
    }),
);

function Player() {
    const [station, setStation] = useState();
    const [audio, setAudio] = useState();
    const [cover, setCover] = useState();
    const classes = useStyles();


    var player = new Feed.Player("demo", "demo");

    let audioFile = {};
    useEffect(() => {
        var playerView = new Feed.PlayerView("player-view-div", player);

        // simple callback
        player.on("play-completed", function () {
            console.log("a play completed!");
        });

        // third argument sets 'this' for callback function
        player.on("play-started", function () {
            console.log("play started");
        });

        player.tune();
    });

    // Display all the events the player triggers
    player.on("all", function (event: any) {
        console.log(
            "player triggered event '" + event + "' with arguments:"
            // Array.prototype.splice.call(arguments, 1,1)
        );

        console.log("play all");
        let res = Array.prototype.splice.call(arguments, 1, 1);
        // console.log(res[0]);
        // console.log(res[0].audio_file.track.title);
        // console.log(res[0].audio_file.artist.name);
        // console.log(res[0].station.name);
        // console.log(res[0].extra.background_image_url);

        // if (res.length > 0) setStation(res[0].station.name);
        //     setAudio(res[0].audio_file.track.title);
        //     setCover(res[0].extra.background_image_url);
    });

    return (
        <Box component="span" m={1}>
            {station}
            {audio}
            <div id="player-view-div">
                <Grid container className={classes.root} spacing={1}>
                    <Grid item sm={6} xs={6} lg={6} className={classes.stationInfo}>
                        <div className="status"></div>
                    </Grid>
                    <Grid item sm={6} xs={6} lg={6} className={classes.favoriteIcon}>
                        <IconButton aria-label="" className="favorite">
                            <FavoriteBorderIcon className={classes.IconSize} />
                        </IconButton>
                    </Grid>
                </Grid>
                <IconButton aria-label="play/pause" className="play-button">
                    <PlayCircleOutlineIcon className={classes.IconSize} />
                </IconButton>
                <IconButton aria-label="play/pause" className="pause-button">
                    <PauseCircleOutlineIcon className={classes.IconSize} />
                </IconButton>

                <IconButton aria-label="play/pause" className="skip-button">
                    <SkipNextIcon className={classes.IconSize} />
                </IconButton>
            </div>

            <PlayerCard station={station} audioFile={audio} cover={cover} />
        </Box>
    );
}

export default Player;
