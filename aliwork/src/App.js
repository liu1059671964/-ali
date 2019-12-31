import React from 'react';

import './App.css';
import Header from './pages/header/Header'
import Main from './pages/main/Main'
import ThreeBox from './pages/threebox/ThreeBox'
import Zoom from './pages/zoom/Zoom'
function App() {
  return (
    <div>
      <Header></Header>
      <Main></Main>
      <ThreeBox></ThreeBox>
      <Zoom></Zoom>
    </div>
  )
}

export default App;
