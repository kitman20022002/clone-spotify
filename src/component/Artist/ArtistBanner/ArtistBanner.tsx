import React from 'react';
import './ArtistBanner.css';
import Testing from '../../Testing/Testing';

type Props = {
  artist: any;
};

function ArtistBanner({ artist }: Props) {
  return (
    <div className="artistBanner" id="canvas_player">
      <Testing />
      <img src={artist?.images[0].url} alt="abc" />
      <h1>{artist?.name}</h1>
      <p>{artist?.followers.total}</p>
    </div>
  );
}

export default ArtistBanner;
