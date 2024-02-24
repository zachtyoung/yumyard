import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "../pages/Home.jsx"
import MapView from "../pages/Map.jsx"
import Search from "../pages/Search.jsx"

const PageRouter = () => {
	return (
		<Router>
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route path='/map' element={<MapView />} />
				<Route path='/search' element={<Search />} />
			</Routes>
		</Router>
	)
}

export default PageRouter
