import React from 'react';
import './App.css';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import SpotifyWebApi from 'spotify-web-api-js';
import HomePage from './pages/HomePage/HomePage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import QueuePage from './pages/QueuePage/QueuePage';
import SearchPage from './pages/SearchPage/SearchPage';
import LibPage from './pages/LibPage/LibPage';

const spotify = new SpotifyWebApi();

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={() => <HomePage spotify={spotify} />} />
        <Route path="/queue" render={() => <QueuePage spotify={spotify} />} />
        <Route path="/search" render={() => <SearchPage spotify={spotify} />} />
        <Route path="/collection/playlists" render={() => <LibPage spotify={spotify} />} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
}
