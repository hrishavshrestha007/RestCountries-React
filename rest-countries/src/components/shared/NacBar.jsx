import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <nav className='nav'>
            <Link to='/'>Home</Link>
            <Link to='/countries'>Countries</Link>
        </nav>
    )
}

export default NavBar