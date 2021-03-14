import React from 'react';
import './SearchPage.css';
import Footer from '../../component/Footer/Footer';
import SideBar from '../../component/SideBar/SideBar';

interface ISearchPageProps {
  spotify: any,
}

function SearchPage(props:ISearchPageProps) {
  const { spotify } = props;

  return (
    <div className="player">
      <div className="player_body">
        <SideBar />
        <div>Search Body</div>
      </div>
      <Footer spotify={spotify} />
    </div>
  );
}

export default SearchPage;
