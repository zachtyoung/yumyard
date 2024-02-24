import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse } from "@fortawesome/free-solid-svg-icons"

const AdminBar = () => {
	return (
		<div className='home__admin_bar'>
			<button className='home__admin_button'>
				<FontAwesomeIcon icon={faHouse} />
				<span>Wichita</span>
			</button>
		</div>
	)
}

export default AdminBar
