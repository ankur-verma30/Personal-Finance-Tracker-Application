import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Singup from "./pages/Singup";
import Dashboard from "./pages/Dashboard";
import {  ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
function App() {
	return (
		<>
		<ToastContainer/>
		<Router>
			<Routes>
				<Route path="/" element={<Singup />} />
				<Route path="/dashboard" element={<Dashboard />} />
			</Routes>
		</Router>
		</>
	);
}

export default App;
