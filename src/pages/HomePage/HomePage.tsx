import React from 'react';
import './HomePage.css';
import { RouteComponentProps } from 'react-router-dom';
import Login from '../../component/Login/Login';

interface IHomeProps extends RouteComponentProps<{ title: string }> {

}

interface IHomeState {
  data: [],
  cacheData: any,
  errorMessage: string,
}

// eslint-disable-next-line react/prefer-stateless-function
class HomePage extends React.Component<IHomeProps, IHomeState> {
  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}

export default HomePage;
