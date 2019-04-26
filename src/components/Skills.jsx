import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';

const Skills = props => {
	return (
		<div className='Skills'>
			<H2Styled name='Skills' />
			<div className='Skills-container'>
				{
					props.data && props.data.map((skill, index) => (
						<div className='Skills-item' key={`Edu-${index}`} >
							<H3Styled>
								{skill.name}: {skill.percentage}
							</H3Styled>
						</div>
					))
				}
			</div>
		</div>
	);
}

export default Skills;