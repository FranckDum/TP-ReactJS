import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <ul>
                    <li className="nav-link"><Link to="/">Accueil</Link></li>
                    <li className="nav-link"><Link to="/apiCyberDragon">Archétype Cyber Dragon</Link></li>
                    <li className="nav-link"><Link to="/apiCyberTénébreux">Archétype Cyber Ténébreux</Link></li>
                    <li className="nav-link"><Link to="/apiDarkMagician">Archétype Dark Magician</Link></li>
                    <li className="nav-link"><Link to="/apiBlueEyes">Archétype Blue-Eyes</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;