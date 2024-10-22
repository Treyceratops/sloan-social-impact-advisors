import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
			<div className='nav-bar'>
				<h1 className='sloan-social-impact-advisors'>
					Sloan Social Impact Advisors
				</h1>
				<Link className='nav-home' to='/'>
					Home
				</Link>
				<Link className='nav-about' to='/about'>
					About
				</Link>
				<Link className='nav-client-work' to='/client-work'>
					Client Work
				</Link>
				<Link className='nav-contact' to='/contact'>
					Contact
				</Link>
			</div>
		);
	}
}

NavBar.propTypes = {};

export default NavBar;
