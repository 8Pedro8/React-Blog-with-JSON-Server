import { Link } from 'react-router-dom'

// sfc (stateless functional component)
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The React Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color: 'white',
                    backgroundColor: '#6a35f1',
                    borderRadius: '8px',
                }}>New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;