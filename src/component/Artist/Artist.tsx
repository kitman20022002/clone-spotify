import React from 'react';
import './Artist.css';
import ImageLoad from '../ImageLoad/ImageLoad';

interface IArtistProps {
  data: any;
  label: string;
  imgRound?: boolean;
  click: any;
}

function Player(props: IArtistProps) {
  const { data, label, imgRound, click } = props;

  return (
    <div className="artist" onClick={click}>
      <ImageLoad src={data.images[0].url} alt="img" classes={imgRound ? 'round' : ''} imgRound={!!imgRound} />
      <h2>{data.name}</h2>
      <p>{label}</p>
    </div>
  );
}

export default Player;
