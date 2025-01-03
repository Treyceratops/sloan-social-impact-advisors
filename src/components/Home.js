import React from 'react';
import TidesImage from '../images/tides-image.png';
import TidesText from '../images/tides-text.png';

function Home(props) {
	return (
		<div>
			<div className='home'>
				<style>
					{'.nav-home::before{content: "「";}'}
					{'.nav-home::after{content: "」";}'}
					{'.nav-home{font-size: 1.2rem;}'}
				</style>
				<div className='home-image'>
					<h1>「Expertise in Action: Advancing Social Good」</h1>
					<p className='p1'>
						Sloan Social Impact Advisors undertakes short and longer term
						consulting assignments for nonprofit organizations, foundations, and
						corporate social impact teams. We partner to solve strategic,
						programmatic, leadership, and/or fundraising challenges and help
						organizations drive their outcomes more effectively.
					</p>
				</div>
				<div className='home-intro'>
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
				<div className='expertises'>
					<h3>Our areas of expertise include:</h3>
					<div className='expertise'>
						<div>
							<h4>Strategy, market, and impact assessment studies</h4>
							<p>
								Conduct strategic planning, product/market fit, theory of
								change, mission/vision, and measuring & evaluation process
								assessments and provide recommendations to enhance
								effectiveness.
							</p>
							<h5 className='bullet'>▤</h5>
							<h4>Programmatic pilot development or assessment</h4>
							<p>
								Develop innovative programmatic pilots, assess and refresh
								social impact programs, and coordinate philanthropic
								multi-funder initiatives.
							</p>
							<h5 className='bullet'>▤</h5>
							<h4>Fundraising for grant, equity or impact investments</h4>
							<p>
								Design or restructure grant/equity/debt fundraising programs and
								teams to increase donor/investor engagement and support. Manage
								complex nonprofit mergers and acquisitions.
							</p>
							<h5 className='bullet'>▤</h5>
						</div>
						<div>
							<h4>Corporate Social Impact & Pledge 1% Initiatives</h4>
							<p>
								Create or reboot corporate social impact programs, especially
								within a Pledge 1% or ESG frame, including corporate
								grantmaking, employee volunteering, and product marketing to
								nonprofit customers.
							</p>
							<h5 className='bullet'>▤</h5>
							<h4>Coaching, mentoring, and interim leadership</h4>
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
				</div>
				<div className='publications'>
					<h3>Social Impact Publications by Alex Sloan</h3>
					<div className='tides-container'>
						<div className='tides-cards'>
							<img
								className='tides-image'
								src={TidesImage}
								alt='tides-publication'
							/>
							<p className='tides-text'>
								Guide and workshop on using various types of capital to drive
								social and/or financial impact
							</p>
						</div>
						<div className='tides-cards'>
							<img
								className='tides-image'
								src={TidesText}
								alt='tides-publication'
							/>
							<p className='tides-text'>
								Review of how innovative corporations create social impact
								programs
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
