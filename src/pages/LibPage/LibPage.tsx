import React from 'react';
import './LibPage.css';
import { useHistory } from 'react-router-dom';
import { useDataLayerValue } from '../../DataLayer';
import Artist from '../../component/Artist/Artist';
import Main from '../HOC/Main';

function LibPage() {
  const history = useHistory();
  const [{ playlists }] = useDataLayerValue();

  const playlistClick = () => {
    history.push('/artist/');
  };
  return (
    <Main>
      <div className="lib_body">
        <h1>Playlist</h1>
        <div className="lib__container">
          {playlists?.items?.map((playlist: any) => (
            <Artist
              data={playlist}
              label="Artist"
              click={playlistClick}
            />
          ))}
        </div>
      </div>
    </Main>
  );
}

export default LibPage;
