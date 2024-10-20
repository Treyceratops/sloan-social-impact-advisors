import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TidesImage from '../images/tides-image.png';
import TidesText from '../images/tides-text.png';

class Home extends Component {
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
			<div className='home'>
				<div className='dock'>
					<h1>“Expertise in Action: Advancing Social Good”</h1>
					<p>
						Sloan Social Impact Advisors undertakes short and longer term
						consulting assignments for nonprofit organizations, foundations, and
						corporate social impact teams to solve strategic, programmatic,
						and/or fundraising challenges and help organizations drive their
						outcomes more effectively.
					</p>
				</div>
				<div className='publications'>
					<h3>Areas of expertise include</h3>
					<div>
						<ul>
							<li>
								Develop or refresh social impact programs, coordinate
								philanthropic multi-funder initiatives, and create innovative
								programmatic pilots;
							</li>
							<li>
								Conduct strategic planning, theory of change, mission/vision,
								and measuring & evaluation process assessments and provide
								recommendations to enhance effectiveness;
							</li>
							<li>
								Design or restructure grant/equity/debt fundraising programs and
								teams to increase donor/investor engagement and support. Manage
								complex nonprofit mergers and acquisitions;
							</li>
						</ul>
						<ul>
							<li>
								Create or reboot corporate social impact programs, especially
								within a Pledge 1% or ESG frame, including grant making,
								employee volunteering, and product marketing to nonprofit
								customers;
							</li>
							<li>
								Provide executive, leadership team, and/or board of directors
								coaching and facilitation. Support and lead effective team
								retreats and strategic gatherings;
							</li>
							<li>
								Assume temporary/transitional executive leadership roles in
								nonprofit, foundation, or corporate social impact teams.
							</li>
						</ul>
					</div>
					<h3>Social Impact Publications by Alex Sloan</h3>
					<img className='tides' src={TidesImage} alt='tides' />
					<img className='tides' src={TidesText} alt='tides' />
				</div>
			</div>
		);
	}
}

Home.propTypes = {};

export default Home;
