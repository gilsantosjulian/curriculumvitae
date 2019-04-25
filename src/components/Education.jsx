import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';

const Education = props => {
	props ? console.log(props.data) : 'no hay';

	return (
		<div className='Education'>
			<H2Styled name='Education' />
			<div className='Education-container'>
				{
					props.data && props.data.map((education, index) => (
						<div className='Education-item' key={`Edu-${index}`} >
							<H3Styled >
								<span>{education.degree} - {education.institution}</span>
							</H3Styled>
							<PStyled name={education.description} />
						</div>
					))
				}
			</div>

		</div>
	);
}

export default Education;