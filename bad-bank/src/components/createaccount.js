import React, {useContext} from 'react';
import { UserContext } from './context';

export function CreateAccount() {
	const createAcc = useContext(UserContext)
	return <h1>Create Account <br/>
				{JSON.stringify(createAcc)}
			</h1>;
}
