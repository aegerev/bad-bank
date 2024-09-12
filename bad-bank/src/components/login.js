import React, {useContext} from 'react';
import { UserContext } from './context';

export function Login() {
	const log = useContext(UserContext);

	return <h1>Login <br/>
				{JSON.stringify(log)}
	       </h1>;
}

