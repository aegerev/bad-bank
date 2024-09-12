import React, {useContext} from 'react';
import { UserContext } from './context';

 export function Balance() {
	const bal = useContext(UserContext)
	
	return (
	<h1>Balance <br/>
		{JSON.stringify(bal)}
	</h1>
	);
}