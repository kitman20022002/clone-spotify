import React from 'react';
import './Player.css';
import SideBar from '../SideBar/SideBar';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';

interface IPlayerProps {
  spotify: any,
}

function Player(props: IPlayerProps) {
  // eslint-disable-next-line no-unused-vars
  const { spotify } = props;

  return (
    <div className="player">
      <div className="player_body">
        <SideBar />
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default Player;
