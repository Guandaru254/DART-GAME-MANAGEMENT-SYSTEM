import React from 'react';
import SidebarMenu from './sidenav'
import AppRouter  from './AppRouter';

React.render(
  <React.StrictMode>
    <AppRouter/>
  </React.StrictMode>,
  document.getElementById('root')
);

function App() {

  return ( 
      <SidebarMenu>

      </SidebarMenu>
  );
}

export default App;
