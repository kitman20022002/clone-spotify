import React from 'react';
import './LibPage.css';
import Footer from '../../component/Footer/Footer';
import SideBar from '../../component/SideBar/SideBar';

interface ISearchPageProps {
  spotify: any,
}

function LibPage(props:ISearchPageProps) {
  const { spotify } = props;

  return (
    <div className="player">
      <div className="player_body">
        <SideBar />
        <div>LibBody</div>
      </div>
      <Footer spotify={spotify} />
    </div>
  );
}

export default LibPage;
