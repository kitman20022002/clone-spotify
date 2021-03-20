import React from 'react';
import './Main.css';
import Footer from '../../component/Footer/Footer';
import SideBar from '../../component/SideBar/SideBar';
import { useDataLayerValue } from '../../DataLayer';

type Props = {
  children: React.ReactChild,
};

function Main({ children }: Props) {
  const [{ spotify }] = useDataLayerValue();

  return (
    <div className="player">
      <div className="player_body">
        <SideBar />
        {children}
      </div>
      <Footer spotify={spotify} />
    </div>
  );
}

export default Main;
