import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Exclerate from '../images/excelerate-logo.png';
import Okta from '../images/okta-logo.png';
import AuthO from '../images/auth-o-logo.png';
import Tides from '../images/tides-logo.png';
import USAid from '../images/us-aid-logo.png';
import Skoll from '../images/skoll-logo.png';
import NYLF from '../images/nylf-logo.png';
import BioPic from '../images/Alex Sloan 22 A.jpg';
import BioPicLowRes from '../images/11zon_resized.jpeg';
import AlexBio from '../images/alex-bio.pdf';

class About extends Component {
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
			<div className='about'>
				<style>
					{'.nav-about::before{content: "「";}'}
					{'.nav-about::after{content: "」";}'}
					{'.nav-about{font-size: 1.2rem;}'}
				</style>
				<div className='about-image'>
					<h1>「Turning Good Ideas into Great Outcomes」</h1>
					<p className='p1'>
						SSIA leverages three decades of experience in nonprofit leadership,
						foundation management, impact investing, and venture capital by
						founder J. Alexander Sloan and his network of consulting and
						philanthropic partners nationally and globally.
					</p>
				</div>
				<div className='about-section'>
					<p className='p2 about-p2'>
						Alex has spent his career advising, investing in, leading, and
						successfully growing entrepreneurial for-profit and nonprofit
						organizations to achieve financial and/or social impact. He has held
						leadership roles across the social change landscape including in
						venture capital, corporate social impact, private foundations,
						global public charities, nonprofit organizations, and US government
						agencies. Alex has worked on and led teams that have raised and
						deployed over $1 billion in investment and philanthropic capital. He
						has worked closely as advisor, funder, and/or board member to dozens
						of leadership teams to drive outcomes.
					</p>
					<div className='bio'>
						<div className='bio-text'>
							<div className='z-container'>
								<div className='about-logos'>
									<a href='https://skoll.org/'>
										<img src={Skoll} alt='skoll-logo' />
									</a>
									<a href=''>
										<img src={NYLF} alt='nylf-logo' />
									</a>
								</div>
								<div className='p-card'>
									<h3>Leadership Development</h3>
									<p>
										Alex has demonstrated a lifelong commitment to advancing
										leadership skills and opportunities for adults working in
										high-growth companies and social change organizations and
										for young people seeking exceptional career paths.{' '}
									</p>
									<p>
										Alex’s work as Director of the{' '}
										<a href='https://skoll.org/'>Skoll Foundation’s</a> Skoll
										Award for Social Entrepreneurship expanded the reach,
										diversity, and impact of this globally recognized leadership
										award program. He was also part of the founding team and
										served for over 15 years as president and board chairman of
										National Youth Leadership Forum, which offered compelling
										leadership and career-oriented experiences to over 20,000
										high school and college students annually in 12 cities.
									</p>
									<p>
										Alex has served many times as coach, mentor, and advisor to
										senior executives and next generation leaders.
									</p>
								</div>
							</div>
							<div className='z-container'>
								<div className='right about-logos'>
									<a href='http://excelerate-foundation.org/about.php'>
										<img src={Exclerate} alt='excelerate-logo' />
									</a>
								</div>
								<div className='p-card'>
									<h3>Foundation Leadership</h3>
									<p>
										Alex has served as founding Chairman and President of the{' '}
										<a href='http://excelerate-foundation.org/about.php'>
											Excelerate Foundation
										</a>{' '}
										(and its predecessor nonprofit organization, National Youth
										Leadership Forum) since 1991. Excelerate’s community grants
										support innovative nonprofit organizations that drive
										positive change in the areas of social entrepreneurship,
										health, the environment, and community development.
									</p>
									<p>
										Alex spearheads the foundation’s strategic direction,
										policies, and endowment investments. He leads the
										foundation’s grant program advocating for LGBTQ+ causes,
										especially for the transgender community.
									</p>
								</div>
							</div>
							<div className='z-container'>
								<div className='right about-logos'>
									<a href='https://auth0.com/'>
										<img src={AuthO} alt='auth-o-logo' />
									</a>
									<a href='https://www.okta.com/okta-for-good/'>
										<img src={Okta} alt='okta-logo' />
									</a>
									<a href='https://nul.org/news/tides-foundation'>
										<img src={Tides} alt='tides-logo' />
									</a>
									<a href='https://www.usaid.gov/'>
										<img className='us-aid' src={USAid} alt='us-aid-logo' />
									</a>
								</div>
								<div className='p-card'>
									<h3>
										Leadership roles in corporate social Impact, foundation
										management, and venture capital
									</h3>
									<p>
										Alex served in several corporate social impact leadership
										roles at leading identity security software companies{' '}
										<a href='https://www.okta.com/okta-for-good/'>Okta</a>,{' '}
										<a href='https://auth0.com/'>Auth0</a> (acquired by Okta),
										and{' '}
										<a href='https://www.lookout.com/blog/lookout-reimagined'>
											Lookout
										</a>
										.
									</p>
									<p>
										Prior to those corporate social impact roles, Alex served as
										Vice President of Strategic Partnerships & Communications at{' '}
										<a href='https://nul.org/news/tides-foundation'>Tides</a>, a
										global grantmaking and fiscal sponsorship provider focused
										on shared prosperity and social justice.
									</p>
									<p>
										He was Director of Innovation Investments and Portfolio
										Director at the Skoll Foundation, leading its signature
										Skoll Awards for Social Entrepreneurship program.
									</p>
									<p>
										Prior to his work in philanthropy, Alex spent 20 years in
										leadership roles at several leading venture capital firms in
										Hong Kong, Vietnam, and Silicon Valley.
									</p>
									<p>
										Alex began his career as a Presidential appointee serving as
										Aide to the Administrator at the{' '}
										<a href='https://www.usaid.gov/'>
											US Agency for International Development
										</a>
										.
									</p>
								</div>
							</div>
							<h3>Extensive nonprofit board work</h3>
							<p className='center'>
								Alex has served on numerous nonprofit boards and committees
								including EYElliance, Grass Roots Gay Rights Foundation, SF AIDS
								Foundation, Horizons Foundation, and the National Peace
								Foundation. Alex often lectures and speaks on industry panels on
								social impact financing, social entrepreneurship, and venture
								capital.
							</p>
							<h3>Education</h3>
							<p className='center'>
								Alex earned a B.A. degree in International Relations and Asian
								Studies from Tulane University, studied at the Chinese
								University of Hong Kong, and holds an MBA from Cornell
								University.
							</p>
						</div>
					</div>
					<div className='downloads'>
						<h3>Media Resources</h3>
						<div className='media-container'>
							<div>
								<img className='bio-pic' src={BioPic} alt='bio-pic' />
							</div>
							<div className='download-links bio-downloads'>
								<a href={AlexBio}>Bio PDF</a>
								<p>◽</p>
								<a href={BioPic} download>
									High-Res Photo
								</a>
								<p>◽</p>
								<a href={BioPicLowRes} download>
									Low-Res Photo
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

About.propTypes = {};

export default About;
