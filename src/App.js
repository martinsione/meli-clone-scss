import { Home } from "./pages/Home"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { HomeCome } from "./pages/HomeCome"
import "./styles/styles.scss"
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomeCome />} />
				<Route path="/home" element={<Home />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
