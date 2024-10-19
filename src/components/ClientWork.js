import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClientWork extends Component {
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
			<div className='client-works'>
				<p>Client Work</p>
			</div>
		);
	}
}

ClientWork.propTypes = {};

export default ClientWork;
