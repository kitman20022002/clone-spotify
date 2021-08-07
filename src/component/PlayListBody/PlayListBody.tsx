import React from 'react';
import './PlayListBody.css';
import { Favorite, MoreHoriz, PlayCircleFilled, PauseCircleFilled } from '@material-ui/icons';
import Header from '../Header/Header';
import SongRow from '../SongRow/SongRow';
import { useDataLayerValue } from '../../DataLayer';

type Props = {
  data: any;
};

function PlayListBody({ data }: Props) {
  const [{ context, playing }] = useDataLayerValue();

  function shouldShowPause() {
    return context?.uri === data?.uri && playing === true;
  }
  // eslint-disable-next-line no-unused-vars
  return (
    <div className="body">
      <Header />
      <div className="body__info">
        <img src={data?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>{data?.name}</h2>
          <p>{data?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          {/* eslint-disable-next-line react/destructuring-assignment */}
          {shouldShowPause() ? (
            <PauseCircleFilled className="body__shuffle" />
          ) : (
            <PlayCircleFilled className="body__shuffle" />
          )}
          <Favorite fontSize="large" />
          <MoreHoriz />
        </div>
        <div className="body__songsList">
          {data?.tracks?.items.map((i: any, index: number) => (
            <SongRow track={'track' in i ? i.track : i} index={index + 1} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlayListBody;
