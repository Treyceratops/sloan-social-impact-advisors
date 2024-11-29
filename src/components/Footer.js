import React from 'react';

function Footer(props) {
	return (
		<div className='footer'>
			<div className='foot-width'>
				<hr />
				<div className='copy-inline'>
					<p className='copyright'>
						© Sloan Social Impact Advisors. All Rights Reserved.
					</p>
					<a
						className='contact-link'
						href='mailto:alex@sloansocialimpact.com'
						subject='HTML link'
						target='_blank'
						rel='noreferrer'>
						<button className='contact-button'>CONTACT</button>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Footer;
