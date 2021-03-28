import './styles/main.scss';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NewsList from './components/news-list';

function App(): JSX.Element {
  return (
    <div className="wrapper">
      Hacker News 1
      <BrowserRouter>
        <NewsList />
      </BrowserRouter>
    </div>
  );
}

export default App;
