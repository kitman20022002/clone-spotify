import React from 'react';
import './SideBar.css';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import SideBarOption from '../SideBarOption/SideBarOption';
import { useDataLayerValue } from '../../DataLayer';

function SideBar() {
  const [{ playlists }] = useDataLayerValue();
  return (
    <div className="sidebar">
      {/* eslint-disable-next-line max-len */}
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
        className="sidebar__logo"
      />
      <SideBarOption title="Home" Icon={HomeIcon} />
      <SideBarOption title="Search" Icon={SearchIcon} />
      <SideBarOption title="Your Library" Icon={LibraryMusicIcon} />

      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist: any) => (
        <SideBarOption title={playlist.name} />
      ))}

    </div>
  );
}

export default SideBar;
