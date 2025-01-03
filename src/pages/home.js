import { useState, useEffect } from 'react';
import { useAuth } from '../hooks/authContext';
import { useNavigate } from 'react-router-dom';


export default function Home() {
  const [currentUser, setCurrentUser] = useState(null);

  const user = useAuth();
  const navigate = useNavigate('');

  useEffect(() => {
    if (user && user.username) {
      setCurrentUser(user);
    };
  }, [user, setCurrentUser]);

  if (currentUser && currentUser.username) {
    return navigate('/dashboard');
  };

  return (
    <div className="flex flex-col items-center w-full flex-1">
      <div className="flex flex-col items-center justify-evenly w-full">
        <div className="flex flex-col items-center justify-center w-[90%] p-2 border-bdr border-2 rounded-full boxShadow bg-bg2 m-5">
          <p className="font-craftyGirls font-bold italic text-2xl text-fg text-center w-[90%] tracking-widest">
            Mek&#39;s Hub <span className="text-base">presents</span> <span className="underline">Password Manager</span>
          </p>
        </div>

        <div className="flex flex-col items-center justify-center w-[90%] p-2 border-bdr border-2 rounded-xl boxShadow bg-bg2 m-5">
          <p className="font-craftyGirls italic text-lg text-fg text-center w-[90%] tracking-widest">
            A light-weight password management system designed to help you in doing more than just storing your passwords. Although this application does not interact with any other applications, websites, or other, to auto-fill or allow ease-of-use of your information, we do notify you when it comes time to change your passwords.
          </p>
        </div>
        
        <div className="flex flex-col items-center justify-center w-[90%] p-2 border-bdr border-2 rounded-xl boxShadow bg-bg2 m-5">
          <p className="font-craftyGirls italic text-lg text-fg text-center w-[90%] tracking-widest">
            At this time, we use your computer's local storage (during development) to store your passwords and login information. As development progresses, this application will update to incorporate MongoDB's online database storage system. This is to protect you and your passwords more effectively in the long run.
          </p>
        </div>
        
        <div className="flex flex-col items-center justify-center w-[90%] p-2 border-bdr border-2 rounded-xl boxShadow bg-bg2 m-5">
          <p className="font-craftyGirls italic text-lg text-fg text-center w-[90%] tracking-widest">
            To get started, create an account or login!
          </p>
        </div>
      </div>
    </div>
  );
};
