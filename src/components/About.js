import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BioPic from '../images/alexwill_150.jpg';
import BioPicLowRes from '../images/alexwill_150_lowres.jpeg';
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
				<div className='about-teacher'>
					<h1>“Turning Good Ideas into Great Outcomes”</h1>
				</div>
				<div className='bio-downloads'>
					<img className='bio-pic' src={BioPic} alt='bio-pic' />
					<div>
						<h3>Downloads</h3>
						<div className='download-links'>
							<a href={AlexBio}>PDF Bio</a>
							<p>|</p>
							<a href={BioPic} download>
								High Res Photo
							</a>
							<p>|</p>
							<a href={BioPicLowRes} download>
								Low Res Photo
							</a>
						</div>
					</div>
				</div>
				<div className='bio'>
					<div className='bio-text'>
						<p className='first-letter'>
							Alex has spent three decades advising, investing in, leading, and
							successfully growing entrepreneurial for-profit and nonprofit
							organizations to achieve financial and/or social impact. Alex has
							held leadership roles across the social change landscape including
							in venture capital, corporate social impact, private foundations,
							global public charities, nonprofit organizations, and US
							government agencies. Alex has worked on and led teams that have
							raised and deployed over $1 billion in investment and
							philanthropic capital. He has worked closely as advisor, funder,
							and/or board member to dozens of leadership teams to drive
							outcomes.
						</p>
						<p>◽</p>
						<p>
							Alex has demonstrated a lifelong commitment to advancing
							leadership skills and opportunities for adults working in
							high-growth companies and social change organizations and for
							young people seeking exceptional career paths. Alex’s work as
							Director of the Skoll Foundation’s Skoll Award for Social
							Entrepreneurship expanded the reach, diversity, and impact of this
							globally recognized leadership award program. Alex was also part
							of the founding team and served for over 15 years as president and
							board chairman of National Youth Leadership Forum, which offered
							compelling leadership and career-oriented experiences to over
							20,000 high school and college students annually in 12 cities.
						</p>
						<p>◽</p>
						<p>
							Alex has served as founding Chairman and President of the
							Excelerate Foundation (and its predecessor nonprofit organization,
							National Youth Leadership Forum) since 1991. Excelerate’s
							community grants support innovative nonprofit organizations that
							drive positive change in the areas of social entrepreneurship,
							health, the environment, and community development. Alex
							spearheads the foundation’s strategic direction, policies, and
							endowment investments. He leads the foundation’s grant program
							advocating for LGBTQ+ causes, especially for the transgender
							community.
						</p>
						<p>◽</p>
					</div>
					<div className='bio-text bio-text2'>
						<p>
							From 2019-2023, Alex served in several corporate social impact
							leadership roles at leading identity security software companies
							Okta, Auth0 (acquired by Okta), and Lookout. Alex was the founding
							director of Auth0’s social impact arm, Auth0.org, where he
							developed its philanthropic approach, employee charitable
							volunteering program, and product marketing and sales strategy to
							nonprofit organizations. Alex then deployed over $5 million in
							grants to dozens of nonprofits, thousands of hours of employee
							volunteer hours to charitable organizations, and discounted
							licenses of critical security software to many nonprofit
							organizations globally.
						</p>
						<p>◽</p>
						<p>
							Prior to those corporate social impact roles, Alex served as Vice
							President, Strategic Partnerships & Communications at Tides, a
							global grantmaking and fiscal sponsorship provider focused on
							shared prosperity and social justice. Alex served on the executive
							team and created Tides’ impact investing services and external
							outreach and communications teams, which successfully increased
							and diversified Tides’ client base and charitable assets under
							management. Alex led a major brand and strategic messaging
							overhaul for Tides. Alex was previously Director of Innovation
							Investments and Portfolio Director at the Skoll Foundation,
							leading its signature Skoll Awards for Social Entrepreneurship
							program.
						</p>
						<p>◽</p>
						<p>
							Prior to shifting to social impact work full time, Alex spent 18
							years as a venture capitalist, investing in high growth companies
							from seed stage through IPO/acquisition in a variety of sectors,
							including Clean Technologies and software and communications
							services, at leading venture firms Expansion Capital Partners,
							JPMorgan Partners and Hambrecht & Quist. Alex worked on one of the
							first venture funds in Vietnam, The Vietnam Fund Management
							Company, based in Hong Kong and Ho Chi Minh City.{' '}
						</p>
						<p>◽</p>
						<p>
							Alex began his career as a Presidential appointee serving as Aide
							to the Administrator at the US Agency for International
							Development.
						</p>
						<p>◽</p>
						<p>
							Alex has served on numerous nonprofit boards and committees
							including EYElliance, Grass Roots Gay Rights Foundation, SF AIDS
							Foundation, Horizons Foundation, National AIDS Memorial, and the
							National Peace Foundation. Alex often lectures and speaks on
							industry panels on social impact financing, social
							entrepreneurship, and venture capital.
						</p>
						<p>◽</p>
						<p>
							Alex earned a B.A. degree in International Relations and Asian
							Studies from Tulane University, studied at the Chinese University
							of Hong Kong, and holds an MBA from Cornell University.
						</p>
					</div>
				</div>
			</div>
		);
	}
}

About.propTypes = {};

export default About;
