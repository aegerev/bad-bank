import React, {createContext} from 'react';

export const UserContext = createContext();

export const UserProvider = ({children}) => {
  
    return (
      <UserContext.Provider
			value={{
				users: [
					{
            name: "ariel",
            email: "arieldtriton@newatlantica.org",
            password: "NewAtlantica2024!",
            balance: 1000,
          },
				],
			}}
		>
      {children}
    </UserContext.Provider>
    );
  };
