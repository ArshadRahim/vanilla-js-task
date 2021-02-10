import { createElement, reactDOM } from './react';
import { Header } from './components/header';
import { Layout } from './components/layout';
import './css/main.css';

const App = () => {
    const main = createElement('div',null);
    const layout= createElement('div',null,Layout());
    main.appendChild(layout);
    return main;


    
}
reactDOM.render(App(), document.getElementById('root'));