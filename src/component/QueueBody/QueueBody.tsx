import React from 'react';
import { useDataLayerValue } from '../../DataLayer';
import SongRow from '../SongRow/SongRow';

function QueueBody() {
  const [{ queueTracks }] = useDataLayerValue();
  console.log(queueTracks);
  return (
    <div className="queue-body">
      {queueTracks?.map((item:any, index:number) => <SongRow track={item} index={index + 1} />)}
    </div>
  );
}

export default QueueBody;
