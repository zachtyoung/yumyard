import "../styles/pages/Home.css"
import LogoBar from "../components/LogoBar.jsx"
import SearchBar from "../components/SearchBar.jsx"
import AdminBar from "../components/AdminBar.jsx"
import SavedResturants from "../components/SavedResturants.jsx"
import TodaysDeals from "../components/TodaysDeals.jsx"
import SeeAllResturants from "../components/SeeAllResturants.jsx"

function Home() {
	return (
		<div className='home'>
			<LogoBar />
			<AdminBar />
			<SearchBar />
			<SavedResturants />
			<TodaysDeals />
			<SeeAllResturants />
		</div>
	)
}

export default Home
