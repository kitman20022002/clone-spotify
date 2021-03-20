import React from 'react';
import './QueuePage.css';
import QueueBody from '../../component/QueueBody/QueueBody';
import Main from '../HOC/Main';

function QueuePage() {
  return (
    <Main>
      <QueueBody />
    </Main>
  );
}

export default QueuePage;
