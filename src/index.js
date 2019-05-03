import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StartPage from "./Components/StartPage";
import nextpage1 from "./nextpage1/nextpage1";
import { Routes } from './routes';

 ReactDOM.render(
     <div>
      <Routes />
     </div>,document.getElementById('container')
 );