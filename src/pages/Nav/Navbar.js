import React from 'react'
import "./Navbar.css"
import NavButton from './NavButton'
import { routes } from "./routes"


const NavBar = () => {

    return (
        <React.Fragment>
            <nav className='navbar navbar-expand-lg'>
                <div className='container mx-auto'>
                    <a className='navbar-brand nav-logo' href='/'>
                        <img src="assets/img/logos/Whole-Q-New.png" className='nav-img' />
                    </a>
                    <button 
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mainNavBar"
                        aria-controls="mainNavBar"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className='collapse navbar-collapse' id='mainNavBar'>
                        <div className='navbar-nav'>
                            <NavButton
                                to='/team'
                                primary='Team'
                            />
                            <NavButton
                                to='/about'
                                primary='About'
                            />
                            <NavButton
                                to='/our-story'
                                primary='Our Story'
                            />
                            <NavButton
                                to='/blog'
                                primary='Blog'
                            />
                            <NavButton
                                to='/contact'
                                primary='Contact'
                            />
                        </div>
                    </div>                    
                </div>
            </nav>
            <div>
                {routes()}
            </div>
        </React.Fragment>
    )
}

export default NavBar