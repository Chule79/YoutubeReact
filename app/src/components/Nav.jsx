import {NavLink} from "react-router-dom"

const Nav = () => {
    return <nav>
        <ul>
            <li><NavLink to="">Home</NavLink></li>
            <li><NavLink to="videos">Videos</NavLink></li>
            <li> <NavLink to="newmeme">Registrar Meme</NavLink></li>
        </ul>
    </nav>
}
export default Nav