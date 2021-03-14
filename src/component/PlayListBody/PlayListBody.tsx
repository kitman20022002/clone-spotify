import React from 'react';
import './PlayListBody.css';
import { Favorite, MoreHoriz, PlayCircleFilled } from '@material-ui/icons';
import Header from '../Header/Header';
import { useDataLayerValue } from '../../DataLayer';
import SongRow from '../SongRow/SongRow';

function PlayListBody() {
  const [{ discoverWeekly }] = useDataLayerValue();

  return (
    <div className="body">
      <Header />
      <div className="body__info">
        <img src={discoverWeekly?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discovery Weekly</h2>
          <p>{discoverWeekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilled className="body__shuffle" />
          <Favorite fontSize="large" />
          <MoreHoriz />
        </div>
        <div className="body__songsList">
          {discoverWeekly?.tracks.items.map((item:any, index:number) => (
            <SongRow track={item.track} index={index + 1} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlayListBody;
