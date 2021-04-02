import React from 'react';
import { GlobalStyle } from './styles/global';
import Header from './components/Header'

export function App() {
  return (
    <div className="App">
      <Header />
      <h1>Home</h1>
      <GlobalStyle />
    </div>
  );
}

