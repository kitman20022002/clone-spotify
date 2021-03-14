import React from 'react';
import './Player.css';
import SideBar from '../SideBar/SideBar';
import PlayListBody from '../PlayListBody/PlayListBody';
import Footer from '../Footer/Footer';

interface IPlayerProps {
  spotify: any,
}

function Player(props: IPlayerProps) {
  const { spotify } = props;

  return (
    <div className="player">
      <div className="player_body">
        <SideBar />
        <PlayListBody />
      </div>
      <Footer spotify={spotify} />
    </div>
  );
}

export default Player;
