import React from 'react';
import './App.css';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact'

function App() {
	return (
		<div className='App'>
			<Nav />
			<Hero />
			<Skills />
			<Projects />
			<Contact />
		</div>
	);
}

export default App;
