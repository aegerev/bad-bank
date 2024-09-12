import React, {useContext} from 'react';
import { UserContext } from './context';

export function Home() {
	const home = useContext(UserContext);
	return (
		<h1>Home <br/>
			{JSON.stringify(home)}
		</h1>
	)		   
}
