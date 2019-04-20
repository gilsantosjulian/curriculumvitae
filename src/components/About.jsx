import React from 'react';

const About = ({ avatar, name, bio, profession, addres, social }) => {
	return (
		<div>
			<div className='About-container'>
				<div id='about-avatar'>
					<div id='about-avatar-image'>{avatar}</div>
				</div>
				<div id='about-name'>
					<h2>{name}</h2>
				</div>
				<div id='about-profession'>{profession}</div>
				<div id='about-bio'>{bio}</div>
				<div id='about-location'>{addres}</div>
				<div id='about-social'>
					{
						social && social.map(item => <div key={item.name}>{item.name}</div>)
					}
				</div>
			</div>
		</div>
	);
}

export default About;