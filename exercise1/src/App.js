import React from 'react'
import './App.css';
import Header from './components/Header';
import MainSection from './components/MainSection';
import NewsNotification from './components/NewsNotification';
import Sidebar from './components/Sidebar';

const grid = {
  width:"80%",
  display: "grid",
  gridTemplateColumns: "2fr 1fr",
  marginLeft: "auto",
  marginRight: "auto",
  gridGap: "10px"
 }

function App() {
  return (
    <div>
      <Header/>
      <NewsNotification/>
      <div style={grid}>
        <MainSection/>
        <Sidebar/>
        </div>
    </div>
  );
}

export default App;

