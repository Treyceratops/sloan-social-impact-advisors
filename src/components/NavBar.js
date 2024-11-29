import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Logo from '../images/ssia-logo.png';

class NavBar extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {}

	componentDidMount() {}

	componentWillReceiveProps(nextProps) {}

	shouldComponentUpdate(nextProps, nextState) {}

	componentWillUpdate(nextProps, nextState) {}

	componentDidUpdate(prevProps, prevState) {}

	componentWillUnmount() {}

	render() {
		return (
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
					target='_blank'>
					Contact
				</a>
			</div>
		);
	}
}

NavBar.propTypes = {};

export default NavBar;
