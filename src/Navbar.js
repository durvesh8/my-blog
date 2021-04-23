import { Link } from 'react-router-dom';



const Navbar = () => {
    return ( 
        <nav className="navbar">
      <h1><Link to="/">Durvesh Malpure</Link></h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#e76F51',
          borderRadius: '8px' 
        }}>New Blog</Link>
      </div>
    </nav>
     );
}
 
export default Navbar;