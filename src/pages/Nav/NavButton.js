import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import './NavButton.css';

function NavButton(props) {
    const { icon, primary, to } = props

    const location = useLocation()
    const path = location.pathname

    return (
        <div className="dropdown">
            <a className={'nav-link list-btn'+ (path === to ? ' active' : '')} aria-current='page' href={to}>
                {icon ? (
                    <span className='nav-icon'>
                        {icon}
                    </span>
                ) : null}
                {primary}
            </a>
        </div>
    )
}

export default NavButton