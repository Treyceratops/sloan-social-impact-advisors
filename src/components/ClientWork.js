import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AidsMemorial from '../images/aids-memorial-logo.png';
import Humanity from '../images/humanity-united-logo.png';
import Lookout from '../images/lookout-logo.svg';

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
				<style>{'.nav-client-work { color: grey; }'}</style>
				<div className='group'>
					<h1>“Partnering with You to Create Positive Change”</h1>
				</div>
				<div className='clients'>
					<div className='client'>
						{/* <h3>National AIDS Memorial</h3> */}
						<a href='https://www.aidsmemorial.org/'>
							<img src={AidsMemorial} alt='national-aids-memorial-logo' />
						</a>
						<h6>2023-Ongoing</h6>
						<p>
							SSIA is designing a new national social justice leadership award
							program for the National AIDS Memorial. Alex conducted a deep
							research project interviewing over 35 stakeholders on the lessons
							learned from four decades of HIV/AIDS activism. Alex developed a
							national social justice leadership award program pilot and sourced
							key partnerships to advance the program. SSIA is also supporting a
							major brand and strategic refresh for the organization.
						</p>
						<p>◼</p>
						<p className='bold'>Quote from John Cunningham, CEO:</p>
						<p className='italy'>
							“After Alex had served for years as a close friend and supporter
							of the National AIDS Memorial, we asked him to take on a
							consulting role to design a new national social justice leadership
							award program. Alex conducted an extensive research project,
							interviewing dozens of stakeholders to capture the lessons learned
							from four decades of HIV/AIDS activism. Leveraging this research
							and his years of experience in leadership education, Alex
							developed a comprehensive pilot for the award program and
							successfully sourced key partnerships to drive the initiative
							forward. Additionally, Alex has been invaluable in supporting a
							refresh for our organization’s brand and strategic impact
							positioning. Alex’s leadership, expertise, and dedication have
							been critical to our progress.” - John
						</p>
					</div>
					<div className='client'>
						{/* <h3>Humanity United</h3> */}
						<a href='https://humanityunited.org/'>
							<img src={Humanity} alt='humanity-united-logo' />
						</a>
						<h6>2024</h6>
						<p>
							SSIA managed a six-month assignment to help HU assess how to crowd
							in additional resources to its key social impact areas, Forced
							Labor & Human Trafficking and Peacebuilding. As part of the
							assignment, Alex interviewed over 40 staff, board members, and key
							stakeholders, synthesized their feedback with other research, and
							provided strategic recommendations to the leadership team. Alex
							facilitated several highly productive executive sessions.
						</p>
						<p>◼</p>
						<p className='bold'>
							Quote from client Joel Beck-Coon, General Counsel, Humanity
							United:
						</p>
						<p className='italy'>
							"Sloan Social Impact Advisors did an outstanding job managing a
							six-month assignment for us, where Alex played a crucial role in
							assessing how to attract additional resources to our key portfolio
							areas. Alex demonstrated exceptional skill and sensitivity in
							conducting in-depth conversations with over 40 key stakeholders,
							then weaving the feedback, together with other research, into
							insightful strategic and tactical recommendations to our
							leadership team. Alex's depth of experience in the field and
							thorough and strategic approach greatly contributed to our
							understanding of our opportunities, and he is a pleasure to work
							with." - Joel
						</p>
					</div>
					<div className='client'>
						{/* <h3>Lookout Software</h3> */}
						<a href='https://www.lookout.com/'>
							<img src={Lookout} alt='lookout-software-logo' />
						</a>
						<h6>2020-2021</h6>
						<p>
							Alex was engaged by leading mobile device security software
							provider Lookout to assess how to reboot Lookout’s stalled
							corporate social impact program. After conducting a four-month
							in-depth review and assessment, Alex provided an action plan to
							reactivate the company’s program to engage its employees in
							charitable giving and skilled and general volunteering with local
							charities, advance gender diversity in the software industry
							though co-hosting a major conference, and enhancing nonprofits’
							access to identity security solutions. The company then hired Alex
							for a seven-month assignment as Interim Head of the Lookout
							Foundation to successfully implement that plan.
						</p>
					</div>
				</div>
			</div>
		);
	}
}

ClientWork.propTypes = {};

export default ClientWork;
