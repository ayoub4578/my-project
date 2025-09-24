import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Signin from './pages/Signin.jsx';
import Profile from './pages/Profile.jsx';
import About from './pages/About.jsx';
import SignUp from './pages/SignUp.jsx';
import Header from './compo/Header.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sigin" element={<Signin />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
