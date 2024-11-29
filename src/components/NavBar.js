import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/ssia-logo.png';

function NavBar(props) {
	return (
		<div>
			<div className='nav-bar space-between'>
				<img className='logo' src={Logo} alt='sloan-social-impact-logo' />
				<Link className='nav-home nav-link' to='/'>
					Home
				</Link>
				<Link className='nav-about nav-link' to='/about'>
					About
				</Link>
				<Link className='nav-client-work nav-link' to='/client-work'>
					Client Work
				</Link>
				<a
					className='nav-contact nav-link'
					href='mailto:alex@sloansocialimpact.com'
					subject='HTML link'
					target='_blank'
					rel='noreferrer'>
					Contact
				</a>
			</div>
		</div>
	);
}

export default NavBar;
