// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Todo from './pages/todo';
import Album from '../src/pages/Album';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <div>
     <AppRouter/>
    </div>
  );
}

export default App;
