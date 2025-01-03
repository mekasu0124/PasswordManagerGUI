import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useAuth } from '../hooks/authContext';


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

        <div className="flex flex-row items-center justify-center w-full">
          <div className="flex flex-row items-center justify-start w-full">
            <Link
              to="/"
              className="font-craftyGirls italic text-fg text-base hover:underline mr-3 ml-3">
                
              Home
            </Link>

            <Link
              to="/"
              className="font-craftyGirls italic text-fg text-base hover:underline mr-3 ml-3">
                
              Login
            </Link>

            <Link
              to="/"
              className="font-craftyGirls italic text-fg text-base hover:underline mr-3 ml-3">
                
              Sign Up
            </Link>
          </div>

          <div className="flex flex-row items-end justify-end w-full">
            <Link
              to="/"
              className="font-craftyGirls italic text-fg text-base hover:underline mr-3 ml-3">
                
              About
            </Link>

            <Link
              to="/"
              className="font-craftyGirls italic text-fg text-base hover:underline mr-3 ml-3">
                
              Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
