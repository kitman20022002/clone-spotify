import React from 'react';
import './ArtistBanner.css';

type Props = {
  artist: any;
};

function ArtistBanner({ artist }: Props) {
  return (
    <div className="artistBanner">
      <img src={artist?.images[0].url} alt="abc" />
      <h1>{artist?.name}</h1>
      <p>{artist?.followers.total}</p>
    </div>
  );
}

export default ArtistBanner;
