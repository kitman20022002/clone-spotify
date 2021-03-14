import React from 'react';
import './QueuePage.css';
import Footer from '../../component/Footer/Footer';
import SideBar from '../../component/SideBar/SideBar';
import QueueBody from '../../component/QueueBody/QueueBody';
import { useDataLayerValue } from '../../DataLayer';

interface IQueuePageProps {
  spotify: any,
}

function QueuePage(props:IQueuePageProps) {
  const { spotify } = props;

  console.log(useDataLayerValue());
  return (
    <div className="player">
      <div className="player_body">
        <SideBar />
        <QueueBody />
      </div>
      <Footer spotify={spotify} />
    </div>
  );
}

export default QueuePage;
