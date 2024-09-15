import React, {useContext} from 'react';
import { UserContext } from './context';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Login() {
	const log = useContext(UserContext);

	return <h1>Login <br/>
				{JSON.stringify(log)}
	       </h1>;
}

