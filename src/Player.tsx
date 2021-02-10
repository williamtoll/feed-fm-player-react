import React, { useEffect, useState } from 'react';
import { Button, Box } from "@material-ui/core";
//@ts-ignore
import Feed from "feed-media-audio-player";
import PlayerCard from './PlayerCard';




function Player() {

    const [station,setStation]=useState();
    const [audio,setAudio]=useState();
    const [cover,setCover]=useState();
    var player = new Feed.Player("demo", "demo");

    let audioFile={};
    useEffect(() => {



        var playerView = new Feed.PlayerView("player-view-div", player);

        // simple callback
        player.on('play-completed', function() { console.log('a play completed!'); });

        // third argument sets 'this' for callback function
        player.on('play-started', function(){
            console.log("play started")
        }, );


        player.tune();
    });

    // Display all the events the player triggers
    player.on("all", function (event: any) {
        console.log(
            "player triggered event '" + event + "' with arguments:",
            // Array.prototype.splice.call(arguments, 1,1)
        );

        console.log("play all")
        let res=Array.prototype.splice.call(arguments, 1, 1);
        console.log(res[0]);
        console.log(res[0].audio_file.track.title);
        console.log(res[0].audio_file.artist.name);
        console.log(res[0].station.name);
        console.log(res[0].extra.background_image_url);

        if(res.length>0)
            setStation(res[0].station.name)
            setAudio(res[0].audio_file.track.title)
            setCover(res[0].extra.background_image_url)

    });

    return (

            <Box component="span" m={1}>
                        {station}
        {audio}
                <div id="player-view-div">
                    <div className='status'></div>
                    <Button className="play-button">Play</Button>
                    <Button className="pause-button">Pause</Button>
                    <Button className="skip-button">Skip</Button>
                </div>
     
                <PlayerCard station={station} audioFile={audio} cover={cover} />
            </Box>

    );
}

export default Player;

