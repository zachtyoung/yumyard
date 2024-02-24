import { useNavigate } from "react-router-dom"
const SearchBar = () => {
	let navigate = useNavigate()
	return (
		<div className='home__search_bar'>
			<form onSubmit={() => navigate("/search")}>
				<input
					className='home__search_input'
					type='text'
					placeholder='Search Dailies'
				/>
			</form>
		</div>
	)
}

export default SearchBar
