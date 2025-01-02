import { Routes, Route } from 'react-router-dom';

import Home from './pages/home';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}
