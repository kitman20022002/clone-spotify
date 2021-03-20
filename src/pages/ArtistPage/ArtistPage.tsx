import React from 'react';
import './ArtistPage.css';
import Main from '../HOC/Main';

function ArtistPage() {
  return (
    <Main>
      <div className="artist_body">
        <h1>Playlist</h1>
        <div className="artist__container" />
      </div>
    </Main>
  );
}

export default ArtistPage;
