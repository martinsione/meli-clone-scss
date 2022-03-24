import { Home } from "./pages/Home"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Root } from "./pages/Root"
import "./styles/styles.scss"
import Store from "./pages/Store"
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Root />} />
				<Route path="/home" element={<Home />} />
				<Route path="/store/samsung" element={<Store />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
