import { createContext, useContext, useState, useEffect } from 'react';

import api from './api';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState('');

  const navigate = useNavigate('');

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser');
    const token = window.localStorage.getItem('token');

    if (loggedUserJSON && token) {
      setUser(JSON.parse(loggedUserJSON));
      setToken(token);
    }
  }, []);

  const login = async (postData) => {
    try {
      const response = await api.post('/auth/login', postData);

      if (response.status === 200) {
        const { message, token, user } = response.data;

        const rememberMeResponse = await api.patch(`/users/${user._id}`, {
          'isRemembered': postData.rememberMe,
        }, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (rememberMeResponse.status === 200) {
          window.localStorage.setItem('loggedUser', JSON.stringify(user));
          window.localStorage.setItem('token', token);
  
          setUser(user);
          setToken(token);
  
          return {
            status: 200,
            message: message,
          };
        } else {
          console.log(rememberMeResponse);
          return {
            status: rememberMeResponse.status,
            message: rememberMeResponse.message,
          }
        }
      }
    } catch (err) {
      console.error(err);
      return {
        status: err.status,
        message: err.response.data.message
      };
    };
  };

  const logout = () => {
    window.localStorage.removeItem('loggedUser');
    window.localStorage.removeItem('token');

    setUser(null);
    setToken('');

    setTimeout(() => {
      return navigate('/auth/login');
    }, 1000);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
};

export const useAuth = () => useContext(AuthContext);
