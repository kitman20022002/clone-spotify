import React from 'react';
import './Player.css';
import PlayListBody from '../PlayListBody/PlayListBody';
import Main from '../../pages/HOC/Main';
import { useDataLayerValue } from '../../DataLayer';

function Player() {
  const [{ discoverWeekly }] = useDataLayerValue();

  return (
    <Main>
      <PlayListBody data={discoverWeekly} />
    </Main>
  );
}

export default Player;
