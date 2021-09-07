import React from 'react'
import './App.css';
import Header from './components/Header';
import MainSection from './components/MainSection';
import NewsNotification from './components/NewsNotification';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      <Header/>
      <NewsNotification/>
      <MainSection/>
      <Sidebar/>
    </div>
  );
}

export default App;
