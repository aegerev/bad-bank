import React, {useContext} from 'react';
import { UserContext } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';

export function AllData() {
	const contXt = useContext(UserContext);

	return (
		<>
			<h1>All Data <br/>
				{JSON.stringify(contXt)}
			</h1>
		</>
	);
}
