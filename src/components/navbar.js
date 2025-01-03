import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useAuth } from '../hooks/authContext';


export default function Navbar() {
  const [currentUser, setCurrentUser] = useState(null);

  const user = useAuth();

  useEffect(() => {
    if (user && user.username) {
      setCurrentUser(user);
    };
  }, [user, setCurrentUser]);

  if (!currentUser) {
    return (
      <div className="flex flex-row items-center justify-center w-full p-1">
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
    );
  };

  return (
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
            
          My Passwords
        </Link>

        <Link
          to="/"
          className="font-craftyGirls italic text-fg text-base hover:underline mr-3 ml-3">
            
          My Profile
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
  );
};
