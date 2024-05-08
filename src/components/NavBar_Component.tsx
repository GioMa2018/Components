// import { useState } from 'react';

import '../styles/NavBar_Component.scss';

function NavBar() {


    return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary BarNav">
        <div className="container-fluid">
            <a className="navbar-brand ColorText" href="#">Company</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active ColorText" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link ColorText" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle ColorText" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
                <ul className="dropdown-menu ColorMenu">
                    <li className='liOption'><a className="dropdown-item OptionColor" href="#">Action</a></li>
                    <li className='liOption'><a className="dropdown-item OptionColor" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li className='liOption'><a className="dropdown-item OptionColor" href="#">Something else here</a></li>
                </ul>
                </li>
                <li className="nav-item">
                <a className="nav-link disabled ColorText" aria-disabled="true">Disabled</a>
                </li>
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success StylesButton ColorText" type="submit">Search</button>
            </form>
            </div>
        </div>
        </nav>
    </>
    );
}

export default NavBar;
