import React from 'react';
import {render} from 'react-dom';
import './style/style.scss'
import Router from './components/Router';

render(
    <Router/>,
    document.querySelector('#app')
);

