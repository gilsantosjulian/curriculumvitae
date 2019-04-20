import React from 'react';
import Main from '../components/Main';
import About from '../components/About';

import userGetData from '../hooks/userGetData';
import Sidebar from '../components/Sidebar';

const App = () => {
	const data = userGetData();
	console.log(data);

	return (
		<Main>
			<Sidebar>
				<About
					avatar={data.avatar}
					name={data.name}
					profession={data.profession}
					bio={data.bio}
					addres={data.addres}
					social={data.social}
				/>
			</Sidebar>
		</Main>
	);

};

export default App;