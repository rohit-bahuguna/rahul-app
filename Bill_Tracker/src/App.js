import AddLable from './componets/AddLable';
import UpdateLable from './componets/UpdateLable';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './componets/Nav';
import Footer from './componets/Footer';
import LableList from './componets/LabelList';

import './App.css';

function App() {
	return (
		<div className="App">
			{/* <AddLable /> */}

			<BrowserRouter>
				<Nav />
				<Routes>
					<Route path="/" element={<LableList />} />
					<Route path="/addlist" element={<AddLable />} />
					<Route path="/updatelist/:id" element={<UpdateLable />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	);
}

export default App;
