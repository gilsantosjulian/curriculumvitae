import {
	useState,
	useEffect
} from 'react';

import {
	myMockData
} from '../constants'

const userGetData = () => {
	const [myData, setData] = useState({});

	useEffect(() => {
		/* 
		    Normally here we can make one call to API 
		    For now we have a mock response
		*/
		setData(myMockData);
	}, []);
	return myData;
}

export default userGetData;