import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../stylesheets/menucomponent.css'
import { Link } from 'react-router-dom'

const Menu = (props) => {

    if (props.user === 'false') {
        return (

            <div>
                <nav class="navbar navbar-expand-md bg-dark navbar-dark">
                    <a class="navbar-brand" href="#">mStockApp</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href='#' onClick={() => { props.updateStatus('loginComponent') }}>Login</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href='#' onClick={() => { props.updateStatus('Companies') }}>Companies</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
    else {
        return (

            <div>
                <nav class="navbar navbar-expand-md bg-dark navbar-dark">
                    <a class="navbar-brand" href="#">mStockApp</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href='#' onClick={() => { props.updateStatus('Companies') }}>Companies</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href='#' onClick={() => { props.updateStatus('watchListComponent') }}>WatchList</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href='#' onClick={() => { props.updateStatus('performanceComponent') }}>Compare Performance</a>

                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href='#' onClick={() => { props.updateStatus('logout') }}>Logout</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }

}
export default Menu;