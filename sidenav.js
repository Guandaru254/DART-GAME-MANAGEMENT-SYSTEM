import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/js/dist/dropdown'
import 'bootstrap/js/dist/collapse'
import './sidenav.css'

function SidebarMenu() {
    return (
      <div className='container-fluid'>
      <div className='row'>
        <div className='col-auto col-sm-2 bg-dark d-flex flex-column justify-content-between min-vh100 mt-4'>
           <div>
              <a className='text-decoration-none ms-4 d-flex align-items-center text-white d-none d-sm-inline'>
              <i className='bi bi-speedometer2'></i>
                 <span className='fs-0 mt-2'>Admin Dashboard</span>
                 </a>
                 <hr className='text-white d-none d-sm-block'></hr>
                 <ul class="nav nav-pills flex-column" id='parentM'>
                     <li class="nav-item my-1">
                        <a href='#' class="nav-link text-white" aria-content="page">Player Section</a>
                     </li>
                     <li class="nav-item my-1">
                        <a href='#submenu' class="nav-link text-white" data-bs-toggle="collapse">Game Section</a>
                     </li>
                     <li class="nav-item">
                        <a href="#" class="nav-link text-white">Scores Statistics</a>
                     </li>
                 </ul>
           </div>
           <div class="dropdown open">
             <a class="btn border-none dropdown-toggle text-white" type='button' id="triggerId" data-bs-toggle="dropdown"
             aria-haspopup="true" aria-expanded="false">
               <i className='bi bi-person fs-4'></i><span className='fs-6 ms-3'>Guandaru</span>
             </a>
             <div class="dropdown-menu" aria-labelledby="triggerId">
                 <a class="dropdown-item" href="#">Profile</a>
                 <a class="dropdown-item" href="#">Settings</a>
             </div>
           </div>
        </div>
      </div>
      </div>
    )
}

export default SidebarMenu