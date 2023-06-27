import React from 'react';
import { render } from 'react-dom';
import BackgroundImage from './BackgorundImage';
import CreatePlayer from './CreatePlayer';
import './CreatePlayer.css';
import CreateGame from './CreateGame';
import './CreateGame.css';
import CreatePayment from './CreatePayment';
import './CreatePayment.css';
import CreateBoard from './CreateBoard';
import './CreateBoard.css';
import CreateStaff from './CreateStaff';
import './CreateStaff.css'
import CreateDesignation from './CreateDesignation';
import './CreateDesignation.css';

function App() {
  
  return ( 
    <div>
        <BackgroundImage/>
        <CreatePlayer/>
        <CreateGame/>
        <CreatePayment/>
        <CreateBoard/>
        <CreateStaff/>
        <CreateDesignation/>
    </div>
  );
}
    
  render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>,
    document.getElementById('root')
  );

  
export default App;
