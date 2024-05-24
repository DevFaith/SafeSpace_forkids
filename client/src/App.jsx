import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Colors = React.lazy(() => import('./pages/Colors'));
const Login = React.lazy(() => import('./pages/Login'));
const Signup = React.lazy(() => import('./pages/Signup'));

const App = () => {
  return (
    <Router>
      <Suspense fallback='Loading....'>
        <div className='fixed z-10 w-full'>
          <Header />
        </div>
        <div className='pt-16'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/colors' element={<Colors />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        </div>
        <div>
          <Footer />
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
