import React from 'react';
import styled from 'styled-components';

const Social = props => {

	const SocialStyled = styled.div`
		margin: 0 auto;
		display: block;
	`;

	const SocialUl = styled.ul`
		list-style-type: none;
		margin: 0;
		padding: 0;
	`;

	const SocialLi = styled.li`
		display: inline;
		margin: 0 1em 0 0;
	`;

	const SocialAnchor = styled.a`
		color: #212121;
		text-decoration: none;
		font-size: 1.2em
	`;

	return (
		<SocialStyled className='Social'>
			{props.social &&
				<SocialUl>
					{props.social.map((item, index) => (
						<SocialLi key={`social-${index}`}>
							<SocialAnchor href={item.url} target='_blank'>
								{item.name}
							</SocialAnchor>
						</SocialLi>
					))}
				</SocialUl>
			}
		</SocialStyled>
	);
}

export default Social;