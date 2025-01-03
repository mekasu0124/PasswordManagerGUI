import { useState, useEffect } from 'react';
import { useAuth } from '../hooks/authContext';

import Navbar from './navbar';


export default function Header() {
  const [currentUser, setCurrentUser] = useState(null);

  const user = useAuth();

  useEffect(() => {
    if (user && user.username) {
      setCurrentUser(user);
    };
  }, [user, setCurrentUser]);

  return (
    <div className="flex flex-col items-center w-full flex-shrink-0 border-b-2 border-b-bdr">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-row items-center justify-center w-full">
          <div className="flex flex-row items-center justify-start w-full p-2">
            <img 
              src="/images/app-icon.jpeg" 
              className="rounded-full" 
              width="80" 
              height="80" 
              alt="Password Manager Icon" />
          </div>

          <div className="flex flex-col items-center justify-center w-full">
            <h1 className="font-craftyGirls font-bold italic text-fg text-2xl pt-3">
              { currentUser && currentUser.username ? currentUser.username : "Password Manager" }
            </h1>
          </div>
        </div>

        <Navbar />
      </div>
    </div>
  );
};
