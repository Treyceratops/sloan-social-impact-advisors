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
				<style>{'.nav-home { color: grey; }'}</style>
				<div className='home-image'>
					<h1>Expertise in Action: Advancing Social Good</h1>
					<p className='p1'>
						Sloan Social Impact Advisors undertakes short and longer term
						consulting assignments for nonprofit organizations, foundations, and
						corporate social impact teams. We partner to solve strategic,
						programmatic, leadership, and/or fundraising challenges and help
						organizations drive their outcomes more effectively.
					</p>
				</div>
				<div>
					<p className='p2'>
						Our clients leverage the three decades of experience in nonprofit
						leadership, foundation management, impact investing, and venture
						capital by founder J. Alexander Sloan and his network of partners
						across the country.
					</p>
					<p className='p3'>
						We would love to support advancing your outcomes and impact.
					</p>
				</div>
				<h3>Our areas of expertise include</h3>
				<div className='publications'>
					<div>
						<h5>Strategy, market, and impact assessment studies</h5>
						<p>
							Conduct strategic planning, product/market fit, theory of change,
							mission/vision, and measuring & evaluation process assessments and
							provide recommendations to enhance effectiveness.
						</p>
						<h5>Programmatic pilot development or assessment</h5>
						<p>
							Develop innovative programmatic pilots, assess and refresh social
							impact programs, and coordinate philanthropic multi-funder
							initiatives.
						</p>
						<h5>Fundraising for grant, equity or impact investments</h5>
						<p>
							Design or restructure grant/equity/debt fundraising programs and
							teams to increase donor/investor engagement and support. Manage
							complex nonprofit mergers and acquisitions.
						</p>
					</div>
					<div>
						<h5>Corporate Social Impact & Pledge 1% Initiatives</h5>
						<p>
							Create or reboot corporate social impact programs, especially
							within a Pledge 1% or ESG frame, including corporate grantmaking,
							employee volunteering, and product marketing to nonprofit
							customers.
						</p>
						<h5>Coaching, mentoring, and interim leadership</h5>
						<p>
							Provide executive, leadership team, and/or board of directors
							coaching and facilitation. Support and lead effective team
							retreats and strategic gatherings.{' '}
						</p>
						<p>
							Assume temporary/transitional executive leadership roles in
							nonprofit, foundation, or corporate social impact teams.
						</p>
					</div>
				</div>
				<h3>Social Impact Publications by Alex Sloan</h3>
				<img className='tides' src={TidesImage} alt='tides' />
				<img className='tides' src={TidesText} alt='tides' />
			</div>
		);
	}
}

Home.propTypes = {};

export default Home;
