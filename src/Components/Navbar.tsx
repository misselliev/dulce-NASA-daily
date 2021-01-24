import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Navbar: React.FC = () => (
    <nav className="ui container">
        <Menu>
            <Link className="header item" to="/">
                <i className="rocket icon" />
                Dulce NASA
            </Link>
            <Menu.Item className="menu right">
                <Link className="item" href="/" to="/">
                    <i className="home icon" />
                    Home
                </Link>
                <Link className="item" href="/favorites" to="/favorites">
                    <i className="heart icon" />
                    Favorites
                </Link>
            </Menu.Item>
        </Menu>
    </nav>
);

export default Navbar;
