import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <nav className='nav'>
            <Link to='/' className="primary-btn">
                Home
            </Link>
            <Link to='/countries' className="primary-btn">
                Countries
            </Link>
        </nav>
    )
}

export default NavBar