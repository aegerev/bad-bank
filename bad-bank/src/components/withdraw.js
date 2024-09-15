import React, {useContext} from 'react';
import { UserContext } from './context';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Withdraw() {
	const wd = useContext(UserContext);
	return <h1>Withdraw <br/>
				{JSON.stringify(wd)};
		  </h1>;
}
