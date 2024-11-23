import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import ClientWork from './components/ClientWork';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
	return (
		<div className='App'>
			<NavBar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/client-work' element={<ClientWork />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
