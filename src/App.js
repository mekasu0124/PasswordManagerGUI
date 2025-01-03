import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './hooks/authContext';

import Home from './pages/home';

import Header from './components/header';

export default function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </AuthProvider>
    </div>
  );
};
