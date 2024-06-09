import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AISuggestions from './components/AISuggestions';

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Programs = React.lazy(() => import('./pages/Programs'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Colors = React.lazy(() => import('./pages/Colors'));
const Login = React.lazy(() => import('./pages/Login'));
const Signup = React.lazy(() => import('./pages/Signup'));

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskTitle) => {
    setTasks([...tasks, { id: crypto.randomUUID(), title: taskTitle, isCompleted: false }]);
  };

  const deleteTaskById = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
  };

  const toggleTaskCompletedID = (taskId) => {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });

    setTasks(newTasks);
  };

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
            <Route path='/programs' element={<Programs />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
          <AISuggestions addTask={addTask} />
        </div>
        <div>
          <Footer />
        </div>
      </Suspense>
    </Router>
  );
};

export default App;
