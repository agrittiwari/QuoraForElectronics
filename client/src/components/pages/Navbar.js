import React, { Fragment } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const Navbar = ({ title, icon, isAuthenticated }) => {
    const authlinks = (
        <Fragment>
            <li>
                Hello
            </li>
            <li>
                <a href="#!" >
                    <i className="fas fa-sign-out-alt"></i> <span>Logout</span>
                </a>
            </li>
        </Fragment>
    );

    const guestlinks = (
        <Fragment>
            <li>
                <Link to='/register' className='bg-dark'>Register</Link>
            </li>
            <li>
                <Link to='/login' className='bg-success'>Login</Link>
            </li>
        </Fragment>
    );
    return (
        <div className='navbar bg-yellow'>
            <h2>
                <i className={icon} /><Link to='/'>{title}</Link>
            </h2>
            <ul>
                {isAuthenticated ? authlinks : guestlinks}
            </ul>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string
}

Navbar.defaultProps = {
    title: 'Quora For Electronics',
    icon: 'fas fa-id-card-alt',
    isAuthenticated: false
}

export default Navbar
