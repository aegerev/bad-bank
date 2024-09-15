import React, {useContext} from 'react';
import { UserContext } from './context';
import Card from './card';

import 'bootstrap/dist/css/bootstrap.min.css';

export function Home() {
	const home = useContext(UserContext);

	return (
		<>
			<Card
				txtcolor = "black"
        header = "BadBank Landing Module"
				title = "Welcome to the bank"
				text = "You can move around using the navigation bar."
			/>
		</>
	);
}
