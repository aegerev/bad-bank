import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/navbar';
import { Home } from './components/home';
import { Login } from './components/login'; 
import { AllData } from './components/alldata.js';
import { Withdraw } from './components/withdraw';
import { Balance } from './components/balance';
import { Deposit } from './components/deposit';
import { CreateAccount } from './components/createaccount';
import {UserProvider} from './components/context';

export function App() {
	return (
	<HashRouter>
		<>
				<h1>Welcome to Bad Bank</h1>
				<NavBar />
			<UserProvider>
				<Routes>
					<Route path="/" exact element={<Home />} />
					<Route path="/login" element={<Login />} />
					{/* Todo: Add the routes for the remaining elements */}
					{/* '/alldata' must point to the `AllData` component, `/createaccount` must point to the `CreateAccount` component and so on..*/}
					<Route path="/alldata" element={<AllData />} />
					<Route path="/withdraw" element={<Withdraw />} />
					<Route path="/balance" element={<Balance />} />
					<Route path="/deposit" element={<Deposit />} />
					<Route path="/createaccount" element={<CreateAccount />} />
        		</Routes>
			</UserProvider>
		</>
	</HashRouter>
	);
}