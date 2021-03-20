import React from 'react';
import './SongRow.css';
import { msToTime } from '../../utils/helper';
import ImageLoad from '../ImageLoad/ImageLoad';

interface ISongRowProps {
  track: any,
  index?: number,
}

function SongRow(props: ISongRowProps) {
  const { track, index } = props;
  return (
    <div className="songRow">
      {index && (
        <div className="songRow__number">
          {index}
        </div>
      )}
      {
        track?.album && (
        <div className="songRow__album">
          <ImageLoad src={track?.album?.images[0].url} alt="" />
        </div>
        )
      }
      <div className="songRow__info">
        <h1>{track.name}</h1>
      </div>
      <div className="songRow__time">
        <p>{msToTime(track.duration_ms)}</p>
      </div>
    </div>
  );
}

export default SongRow;
