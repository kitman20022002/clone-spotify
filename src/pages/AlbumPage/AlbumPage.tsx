import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './AlbumPage.css';
import PlayListBody from '../../component/PlayListBody/PlayListBody';
import Main from '../HOC/Main';
import { useDataLayerValue } from '../../DataLayer';

type TParams = { id: string };

const AlbumPage: React.FC<RouteComponentProps<TParams>> = ({ match }) => {
  const [{ spotify }] = useDataLayerValue();
  const [d, setd] = useState();

  const getData = async () => {
    const res = await spotify.getAlbum(match.params.id);
    setd(res);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Main>
      <PlayListBody data={d} />
    </Main>
  );
};

export default AlbumPage;
