import React from 'react';
import ReactDOM from 'react-dom';
import BinahSdkImpl from './components/BinahSdkImpl';
import App from './components/App';
import GlobalStyle from './style/global';
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

ReactDOM.render(
   <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <App />
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
