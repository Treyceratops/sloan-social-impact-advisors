import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
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
			<div className='contact'>
				<style>{'.nav-contact { color: grey; }'}</style>
				<p>Contact</p>
			</div>
		);
	}
}

Contact.propTypes = {};

export default Contact;
