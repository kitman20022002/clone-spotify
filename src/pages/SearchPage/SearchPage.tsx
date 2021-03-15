import React, { useState } from 'react';
import './SearchPage.css';
import SearchIcon from '@material-ui/icons/Search';
import SideBar from '../../component/SideBar/SideBar';
import Footer from '../../component/Footer/Footer';
import SongRow from '../../component/SongRow/SongRow';

interface ISearchPageProps {
  spotify: any,
}

function SearchPage(props: ISearchPageProps) {
  const { spotify } = props;
  const d : any = [];
  // eslint-disable-next-line no-unused-vars
  const [datas, setDatas] = useState(d);

  const onChangeSearch = async (e: any) => {
    const res = await spotify.search(
      e.target.value,
      ['album', 'artist', 'playlist', 'track'],
      { limit: 4 },
    );
    console.log(res);
    setDatas(res);
  };

  return (
    <div className="player">
      <div className="player_body">
        <SideBar />
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
          <h1>Track</h1>
          {datas?.tracks?.items.map((data:any) => (
            <SongRow track={data} />
          ))}

          <h1>Artists</h1>
          {datas?.tracks?.items.map((data:any) => (
            <SongRow track={data} />
          ))}

          <h1>Albums</h1>
          {datas?.tracks?.items.map((data:any) => (
            <SongRow track={data} />
          ))}

          <h1>Playlists</h1>
          {datas?.tracks?.items.map((data:any) => (
            <SongRow track={data} />
          ))}
        </div>
      </div>
      <Footer spotify={spotify} />
    </div>
  );
}

export default SearchPage;
