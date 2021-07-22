import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './braindump.css'
import js from '../../assets/img/js.png';

export default function ToolInput() {
  const [showTAB, setShowTAB] = useState(false);


    return (
      <>
development area

<div class="container-fluid px-0">
    <nav class="navbar navbar-expand-md navbar-light bg-white p-0">

    <div><Link class="navbar-brand mr-4" to="/"> Home</Link></div>

            <ul class="navbar-nav">
                <li class="nav-item"><div><Link class="nav-link" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" to="/sandbox">
                  Sandbox<span class="fa fa-angle-down"></span></Link></div>
                </li>

                <div>



                </div>









            </ul>
    </nav>
</div>
<div class="container-fluid px-0">
    <nav class="navbar navbar-expand-md navbar-light bg-white p-0"> <a class="navbar-brand mr-4" href="#"><strong>BBBootstrap</strong></a> <button class="navbar-toggler mr-3" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item"> <a class="nav-link" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Resources<span class="fa fa-angle-down"></span></a>
                    <div class="dropdown-menu" id="dropdown-menu1" aria-labelledby="navbarDropdown1">
                        <div class="container">
                            <div class="row">


                                <div class="col-md-6">
                                    <div class="row d-flex tab">
                                        <img className='nav-icon' src={js}/>
                                        <div class="d-flex flex-column"> <a class="dropdown-item" href="#">
                                                <h6 class="mb-0">WearCMS</h6> <small class="text-muted">For your project</small>
                                            </a> </div>
                                    </div>
                                </div>




                                <div class="col-md-6">
                                    <div class="row d-flex tab">
                                        <div class="fa-icon text-center"> <span class="fa fa-gamepad"></span> </div>
                                        <div class="d-flex flex-column"> <a class="dropdown-item" href="#">
                                                <h6 class="mb-0">Game+</h6> <small class="text-muted">Monetization of games</small>
                                            </a> </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="row d-flex tab">
                                        <div class="fa-icon text-center"> <span class="fa fa-video-camera"></span> </div>
                                        <div class="d-flex flex-column"> <a class="dropdown-item" href="#">
                                                <h6 class="mb-0">Streetcam</h6> <small class="text-muted">Keep track all year</small>
                                            </a> </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="row d-flex tab">
                                        <div class="fa-icon text-center"> <span class="fa fa-comment"></span> </div>
                                        <div class="d-flex flex-column"> <a class="dropdown-item" href="#">
                                                <h6 class="mb-0">Teamne</h6> <small class="text-muted">Teamwork</small>
                                            </a> </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="row d-flex tab">
                                        <div class="fa-icon text-center"> <span class="fa fa-briefcase"></span> </div>
                                        <div class="d-flex flex-column"> <a class="dropdown-item" href="#">
                                                <h6 class="mb-0">Prospec</h6> <small class="text-muted">Solutions for your business</small>
                                            </a> </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="row d-flex tab">
                                        <div class="fa-icon text-center"> <span class="fa fa-bolt"></span> </div>
                                        <div class="d-flex flex-column"> <a class="dropdown-item" href="#">
                                                <h6 class="mb-0">Booster</h6> <small class="text-muted">Increase engagement</small>
                                            </a> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="nav-item"> <a class="nav-link" href="#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Templates<span class="fa fa-angle-down"></span></a>
                    <div class="dropdown-menu" id="dropdown-menu2" aria-labelledby="navbarDropdown2">
                    </div>
                </li>
                <li class="nav-item"> <a class="nav-link" href="#" id="navbarDropdown3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Customize<span class="fa fa-angle-down"></span></a>
                    <div class="dropdown-menu" id="dropdown-menu3" aria-labelledby="navbarDropdown3">
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</div>

      </>
    )
  }
