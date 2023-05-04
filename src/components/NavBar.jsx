import {Link} from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';

const NavBar = () => {
    return(
        <div>
            <Nav tabs>
                <NavItem>
                    <NavLink active tag={Link} to="/">
                    Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/posts">
                    Posts
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/comments">
                    Comments
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/albums">
                    Albums
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/photos">
                    Photos
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/todos">
                    Todos
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/users">
                    Users
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/films">
                    Films
                    </NavLink>
                </NavItem>
            </Nav>
        </div>
    );
};
export default NavBar;