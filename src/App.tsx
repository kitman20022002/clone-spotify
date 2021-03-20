import React from 'react';
import './App.css';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import QueuePage from './pages/QueuePage/QueuePage';
import SearchPage from './pages/SearchPage/SearchPage';
import LibPage from './pages/LibPage/LibPage';
import PlaylistPage from './pages/PlaylistPage/PlaylistPage';
import AlbumPage from './pages/AlbumPage/AlbumPage';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={() => <HomePage />} />
        <Route path="/queue" render={() => <QueuePage />} />
        <Route path="/search" render={() => <SearchPage />} />
        <Route path="/collection/playlists" render={() => <LibPage />} />
        <Route path="/playlist/:id" component={PlaylistPage} />
        <Route path="/album/:id" component={AlbumPage} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
}
