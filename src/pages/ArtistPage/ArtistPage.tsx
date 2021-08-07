import React, { useEffect, useState } from 'react';
import './ArtistPage.css';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import Main from '../HOC/Main';
import ArtistBanner from '../../component/Artist/ArtistBanner/ArtistBanner';
import { useDataLayerValue } from '../../DataLayer';
import SongRow from '../../component/SongRow/SongRow';
import Artist from '../../component/Artist/Artist';

type TParams = { id: string };

const ArtistPage: React.FC<RouteComponentProps<TParams>> = ({ match }) => {
  const history = useHistory();
  const [{ spotify }] = useDataLayerValue();
  const [artist, setArtist] = useState();
  const [artistTopTrack, setArtistTopTrack] = useState<any>();
  const [artistAlbums, setArtistAlbums] = useState<any>();

  const getData = async () => {
    spotify.getArtist(match.params.id).then((res: any) => {
      setArtist(res);
    });

    spotify.getArtistTopTracks(match.params.id, 'AU').then((res: any) => {
      setArtistTopTrack(res);
      console.log(res);
    });

    spotify.getArtistAlbums(match.params.id, { limit: 4 }).then((res: any) => {
      setArtistAlbums(res);
      console.log(res);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const albumClick = (e: any, data: any) => {
    history.push(`/album/${data.id}`);
  };

  return (
    <Main>
      <div className="artist_body">

        <ArtistBanner artist={artist} />
        <div className="artistContent">
          {artistTopTrack && <h1 className="title">Artists Top Track</h1>}
          <div className="topTrack__row">
            {artistTopTrack?.tracks?.map((data: any, index: number) => (
              <SongRow track={data} index={index + 1} />
            ))}
          </div>

          {artistAlbums && <h1 className="title">Artists Albums</h1>}
          <div className="artist__row">
            {artistAlbums?.items?.map((data: any) => (
              <Artist
                data={data}
                label="Artist"
                click={(e: any) => {
                  albumClick(e, data);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </Main>
  );
};

export default ArtistPage;
