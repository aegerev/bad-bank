import React, {useContext} from 'react';
import { UserContext } from './context';

export function Deposit() {
	const depos = useContext(UserContext);

	return <h1>Deposit <br/>
				{JSON.stringify(depos)}
		  </h1>;
}