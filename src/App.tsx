import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Box } from "@material-ui/core";
//@ts-ignore
import Feed from "feed-media-audio-player";

function App() {

  useEffect(()=> {
    var player = new Feed.Player("demo", "demo");
  
    // Display all the events the player triggers
    player.on("all", function (event:any) {
      console.log(
        "player triggered event '" + event + "' with arguments:",
        Array.prototype.splice.call(arguments, 1,1)
      );
    });
    
    var playerView = new Feed.PlayerView("player-view-div", player);
    
    player.tune();
  });

  return (
    <div className="App">
      <Box component="span" m={1}>
        <div id="player-view-div">
          <div className='status'></div>
          <Button className="play-button">Play</Button>
          <Button className="pause-button">Pause</Button>
          <Button className="skip-button">Skip</Button>
        </div>
      </Box>
    </div>
  );
}

export default App;
