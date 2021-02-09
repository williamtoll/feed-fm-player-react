import React, { useEffect, useState } from 'react';
import { Button, Box } from "@material-ui/core";
//@ts-ignore
import Feed from "feed-media-audio-player";




function Player() {

    const [station,setStation]=useState();
    
    useEffect(() => {
        var player = new Feed.Player("demo", "demo");

        // Display all the events the player triggers
        player.on("all", function (event: any) {
            console.log(
                "player triggered event '" + event + "' with arguments:",
                Array.prototype.splice.call(arguments, 1, 1)
            );

            console.log("play all")
            console.log(Array.prototype.splice.call(arguments, 1, 1))
        });

        var playerView = new Feed.PlayerView("player-view-div", player);

        // simple callback
        player.on('play-completed', function() { console.log('a play completed!'); });

        // third argument sets 'this' for callback function
        player.on('play-started', function(){
            console.log("play started")
        }, );


        player.tune();
    });


    return (
            <Box component="span" m={1}>
                <div id="player-view-div">
                    <div className='status'></div>
                    <Button className="play-button">Play</Button>
                    <Button className="pause-button">Pause</Button>
                    <Button className="skip-button">Skip</Button>
                </div>
            </Box>
    );
}

export default Player;

