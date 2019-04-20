import React from 'react';
import About from '../components/About';
import Certificates from '../components/Certificates';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Info from '../components/Info';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Skills from '../components/Skills';

import userGetData from '../hooks/userGetData';

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
			<Info>
				<Education data={data.education} />
				<Experience data={data.experience} />
				<Certificates data={data.certificates} />
				<Skills data={data.skills} />
			</Info>
		</Main>
	);

};

export default App;