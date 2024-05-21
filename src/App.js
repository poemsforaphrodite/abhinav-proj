import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Placement from './components/Placement';
import Chat from './components/Chat';
import LearningInfo from './components/LearningInfo';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Courses />
      <Placement />
      <Chat />
      <LearningInfo />
      <Footer />
    </div>
  );
}

export default App;
