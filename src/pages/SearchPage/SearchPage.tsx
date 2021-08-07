import React, { useState } from 'react';
import './SearchPage.css';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router-dom';
import SongRow from '../../component/SongRow/SongRow';
import Artist from '../../component/Artist/Artist';
import Main from '../HOC/Main';
import { useDataLayerValue } from '../../DataLayer';

function SearchPage() {
  const d: any = [];
  const [{ spotify, deviceId, context }] = useDataLayerValue();
  // eslint-disable-next-line no-unused-vars
  const [datas, setDatas] = useState(d);
  const history = useHistory();

  const play = (data: any) => {
    if (context?.uri !== data?.uri) {
      const obj2 = {
        device_id: deviceId,
        context_uri: data?.album.uri,
        offset: {
          position: 0,
        },
        position_ms: 0,
      };
      spotify.play(obj2);
    }
  };

  const onChangeSearch = async (e: any) => {
    const res = await spotify.search(e.target.value, ['album', 'artist', 'playlist', 'track'], { limit: 4 });
    setDatas(res);
  };

  const playlistClick = (e: any, data: any) => {
    history.push(`playlist/${data.id}`);
  };

  const albumClick = (e: any, data: any) => {
    history.push(`album/${data.id}`);
  };

  const artistClick = (e: any, data: any) => {
    history.push(`artist/${data.id}`);
  };

  return (
    <Main page="search">
      <div className="search_body">
        <div className="searchBar">
          <SearchIcon />
          <input
            placeholder="Search for Artists, Songs, Others"
            type="text"
            className="searchInput"
            onChange={onChangeSearch}
          />
        </div>
        <div className="searchItems">
          {datas?.tracks && <h1>Track</h1>}
          {datas?.tracks?.items.map((data: any) => (
            <SongRow
              track={data}
              rowClick={() => {
                play(data);
              }}
            />
          ))}

          {datas?.artists && <h1>Artists</h1>}
          <div className="artist__row">
            {datas?.artists?.items.map((data: any) => (
              <Artist
                data={data}
                label="Artist"
                imgRound
                click={(e: any) => {
                  artistClick(e, data);
                }}
              />
            ))}
          </div>

          {datas?.albums && <h1>Albums</h1>}
          <div className="artist__row">
            {datas?.albums?.items.map((data: any) => (
              <Artist
                data={data}
                label="Artist"
                click={(e: any) => {
                  albumClick(e, data);
                }}
              />
            ))}
          </div>

          {datas?.playlists && <h1>Playlists</h1>}
          <div className="artist__row">
            {datas?.playlists?.items.map((data: any) => (
              <Artist
                data={data}
                label="Artist"
                click={(e: any) => {
                  playlistClick(e, data);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </Main>
  );
}

export default SearchPage;
