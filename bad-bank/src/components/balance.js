import React, {useContext} from 'react';
import { UserContext } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';

 export function Balance() {
	const bal = useContext(UserContext)
	
	return (
	<h1>Balance <br/>
		{JSON.stringify(bal)}
	</h1>
	);
}