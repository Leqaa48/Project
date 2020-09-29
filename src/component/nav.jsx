import React, {useContext } from 'react';
import {PostContext} from '../context/postContext';
import '../App.css';
import { Link } from 'react-router-dom';

function Nav() {

    const navStyle = {
        color: 'white'
    };
    return (
        <nav>
            <h2>Nav</h2>
            <ul className="nav-links">
                <Link to="/AddPost">
                    <li>Add Post</li>
                </Link>
                <Link to="/ViewPosts">
                    <li>View Posts</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;