/*
import {a} from './main.js';
document.querySelector('#app').innerHTML=a;
var input=document.createElement('input');
input.type='text';
input.value='test';
document.body.appendChild(input)*/

import React from 'react';
import ReactDOM from 'react-dom';
import {Name} from './main';

ReactDOM.render(
    <Name />,
    document.querySelector('#app')
)