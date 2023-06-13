import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/collapse';
import './sidenav.css';
import dartimg from "./dartimg.png";
import {Link} from 'react-router-dom';

function SidebarMenu() {
    return (
      <div className='container-fluid' style={{backgroundImage:`url(${dartimg})`,
      backgroundSize:' cover', backgroundPosition:'left top:', backgroundAttachment: 'fixed', minHeight:'100vh',}}>
      <div className='row'>
      <i className='ms-5 bi bi-caret-down-fill ms-3'></i>
         <h5>DART PRO</h5>
        <div className='col-auto col-sm-2 bg-dark d-flex flex-column justify-content-between min-vh100 mt-4' style={{ minHeight:'100vh', }}>
           <div>
                                           {/* ADMIN DASHBOARD */}
              <a className='mt-4 text-decoration-none ms-4 d-flex align-items-center text-white d-none d-sm-inline'>
              <i className='bi bi-house'></i>
                 <span className='fs-0 mt-2 ms-2'>Admin Dashboard</span>
                 </a>
                 <hr className='text-white d-none d-sm-block'></hr>
                 <ul class="nav nav-pills flex-column" id='parentM'>
                                            {/* PLAYER SECTION */}
                     <li class="nav-item my-1">
                        <a href='#submenu3' class="nav-link text-white" data-bs-toggle="collapse" aria-content="page">
                        <i className='bi bi-people'></i>
                        <span className='ms-2 d-none d-sm-inline'>Player Section</span>
                        <i className='ms-5 bi bi-caret-down-fill ms-3'></i>
                        </a>
                        <ul class="nav collapse ms-2 flex-column" id="submenu3" data-bs-parent=".nav-item">
                             <li class="nav-item">
                                 <a class="nav-link text-white" href="#" aria-current="page">Create Player</a>
                             </li>
                             <li class="nav-item">
                                 <a class="nav-link text-white" href="#" aria-current="page">Update Player</a>
                             </li>
                             <li class="nav-item">
                                 <a class="nav-link text-white" href="#" aria-current="page">Delete Player</a>
                             </li>
                          </ul>
                     </li>
                                             {/* GAME SECTION */}
                     <li class="nav-item my-1">
                        <a href='#submenu1' class="nav-link text-white" data-bs-toggle="collapse" aria-current="page">
                          <i className='bi bi-grid'></i>
                          <span className='ms-2 d-none d-sm-inline'>Game Section</span>
                          <i className='ms-5 bi bi-caret-down-fill ms-3'></i>
                          </a>
                          <ul class="nav collapse ms-2 flex-column" id="submenu1" data-bs-parent=".nav-item">
                             <li class="nav-item">
                                 <a class="nav-link text-white" href="#" aria-current="page">Create Game</a>
                             </li>
                             <li class="nav-item">
                                 <a class="nav-link text-white" href="#">Update Game</a>
                             </li>
                          </ul>
                     </li>
                                             {/* SCORES STATISTICS */}
                     <li class="nav-item my-1">
                        <a href="#submenu2" class="nav-link text-white" data-bs-toggle="collapse" aria-current="page">
                           <i className='bi bi-star'></i>
                          <span className='ms-2 d-none d-sm-inline'>Scores Statistics</span>
                          <i className='ms-3 bi bi-caret-down-fill ms-3'></i>
                          </a>
                          <ul class="nav collapse ms-2 flex-column" id="submenu2" data-bs-parent=".nav-item">
                             <li class="nav-item">
                                 <a class="nav-link text-white" href="#" aria-current="page">Create Game</a>
                             </li>
                             <li class="nav-item">
                                 <a class="nav-link text-white" href="#" aria-current="page">Update Game</a>
                             </li>
                          </ul>
                     </li>
                                              {/* LEADERBOARDS */}
                     <li class="nav-item my-1">
                        <a href="#" class="nav-link text-white" data-bs-toggle="collapse" aria-current="page">
                            <i className='bi bi-trophy'></i>
                          <span className='ms-2 d-none d-sm-inline'>Leaderboards</span>
                          <i className='ms-5 bi bi-caret-down-fill ms-3'></i>
                          </a>
                          <ul class="nav collapse ms-2 flex-column" id="submenu" data-bs-parent="#">
                             <li class="nav-item">
                                 <a class="nav-link text-white" href="#" aria-current="page">Create Game</a>
                             </li>
                             <li class="nav-item">
                                 <a class="nav-link text-white" href="#">Update Game</a>
                             </li>
                          </ul>
                     </li>
                 </ul>
           </div>
           <div class="dropdown open">
             <a class="btn border-none dropdown-toggle text-white" type='button' id="triggerId" data-bs-toggle="dropdown"
             aria-haspopup="true" aria-expanded="false">
               <i className='bi bi-person fs-4'></i><span className='fs-6 ms-3 d-none d-sm-inline mb-4'>Guandaru</span>
             </a>
             <div class="dropdown-menu" aria-labelledby="triggerId">
                 <a class="dropdown-item" href="#">Profile</a>
                 <a class="dropdown-item" href="#">Settings</a>
             </div>
           </div>
        </div>
      </div>
      <div className='col'>

           </div>
      </div>
    )
}

export default SidebarMenu