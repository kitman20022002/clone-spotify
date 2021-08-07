import React from 'react';
import './SideBar.css';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useHistory } from 'react-router-dom';
import SideBarOption from '../SideBarOption/SideBarOption';
import { useDataLayerValue } from '../../DataLayer';

interface Props {
  page?: string;
}

function SideBar({ page }: Props) {
  const [{ playlists }] = useDataLayerValue();
  const history = useHistory();

  const redirect = (playlist: any) => {
    history.push(`/playlist/${playlist.id}`);
  };

  return (
    <div className="sidebar">
      {/* eslint-disable-next-line max-len */}
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
        className="sidebar__logo"
      />
      <SideBarOption title="Home" Icon={HomeIcon} shouldHighLight={page === 'home'} onClick={() => history.push('/')} />
      <SideBarOption
        title="Search"
        Icon={SearchIcon}
        shouldHighLight={page === 'search'}
        onClick={() => history.push('/search')}
      />
      <SideBarOption
        shouldHighLight={page === 'yourLib'}
        title="Your Library"
        Icon={LibraryMusicIcon}
        onClick={() => history.push('/collection/playlists')}
      />

      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist: any) => (
        <SideBarOption
          title={playlist.name}
          onClick={() => {
            redirect(playlist);
          }}
        />
      ))}
    </div>
  );
}

export default SideBar;
