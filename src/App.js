import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
	BrowserRouter,
	Routes,
	Route
} from "react-router-dom";

function App() {

	const [mode, setMode] = useState('light');

	const [alert, setAlert] = useState(null);

	const showAlert = (message, type) => {
		setAlert({
			message: message,
			type: type
		});
		setTimeout(() => {
			setAlert(null);
		}, 1000);
	};

	const toggleMode = () => {
		if (mode === 'dark') {
			setMode('light');
			document.body.style.backgroundColor = 'white';
			showAlert('Light mode enabled', 'success');
		} else {
			setMode('dark');
			document.body.style.backgroundColor = '#042743';
			showAlert('Dark mode enabled', 'success');
		}
	};

	return (
		<BrowserRouter>
			<Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
			<Alert alert={alert} />
			<div className="container my-3">
				<Routes>
					<Route path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode} />} />
					<Route path="/about" element={<About mode={mode} />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
