import React from 'react';
import './PlayListBody.css';
import { Favorite, MoreHoriz, PlayCircleFilled, PauseCircleFilled } from '@material-ui/icons';
import Header from '../Header/Header';
import SongRow from '../SongRow/SongRow';
import { useDataLayerValue } from '../../DataLayer';
import RotateDisc from '../RotateDisc/RotateDisc';

type Props = {
  data: any;
};

function PlayListBody({ data }: Props) {
  const [{ context, playing, spotify, deviceId, item }] = useDataLayerValue();

  function shouldShowPause() {
    return context?.uri === data?.uri && playing === true;
  }

  function pauseMusic() {
    spotify.pause();
  }

  function playMusic(e: any, post: number = -1) {
    let options = {
      device_id1: deviceId,
    };

    if (context?.uri !== data?.uri) {
      const obj2 = {
        context_uri: data?.uri,
        offset: {
          position: 0,
        },
      };
      options = { ...options, ...obj2 };
    }
    if (post !== -1) {
      const obj2 = {
        context_uri: data?.uri,
        offset: {
          position: post,
        },
      };
      options = { ...options, ...obj2 };
    }
    spotify.play(options);
  }

  const isPlaying = shouldShowPause();
  // eslint-disable-next-line no-unused-vars
  return (
    <div className="body" id="canvas_player">
      <Header />
      <div className="body__info">
        <RotateDisc img={data?.images[0].url} shouldRotate={isPlaying} />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>{data?.name}</h2>
          <p>{data?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          {/* eslint-disable-next-line react/destructuring-assignment */}
          {isPlaying ? (
            <PauseCircleFilled className="body__shuffle" onClick={pauseMusic} />
          ) : (
            <PlayCircleFilled className="body__shuffle" onClick={playMusic} />
          )}
          <Favorite fontSize="large" />
          <MoreHoriz />
        </div>
        <div className="body__songsList">
          {data?.tracks?.items.map((i: any, index: number) => {
            const tra = 'track' in i ? i.track : i;
            return (
              <SongRow
                track={tra}
                index={index + 1}
                isPlaying={tra.uri === item?.uri}
                rowClick={(e: any) => {
                  playMusic(e, index);
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PlayListBody;
