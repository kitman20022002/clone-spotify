import React from 'react';
import './SongRow.css';
import { msToTime } from '../../utils/helper';

interface ISongRowProps {
  track: any,
  index:number,
}

function SongRow(props: ISongRowProps) {
  const { track, index } = props;
  return (
    <div className="songRow">
      <div className="songRow__number">
        {index}
      </div>
      <div className="songRow__album">
        <img src={track.album.images[0].url} alt="" />
      </div>
      <div className="songRow__info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist: any) => artist.name).join(', ')}
          {track.album.name}
        </p>
      </div>
      <div className="songRow__time">
        <p>{msToTime(track.duration_ms)}</p>
      </div>
    </div>
  );
}

export default SongRow;
