import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="home-nav-bar">
            <div className="logo">
                <Link to="/"><h1>RECETTE</h1></Link>
            </div>
            <ul className='flex-row'>
                <li><a href=""><i className="fa-solid fa-magnifying-glass"></i> FIND RECIPES</a></li>
                <li><Link to="/tests">TEST SITE</Link></li>
                <li><Link to='recipes'>POST RECIPE</Link></li>
                <li><Link to='/'>CREATE ACCOUNT</Link></li>
            </ul>
            <div className="menu-bar">
                <i class="fa-solid fa-bars"></i>
            </div>
        </nav>
    )
}

export default Navbar