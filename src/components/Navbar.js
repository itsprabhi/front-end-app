import React, { Component } from 'react';
import { Link } from 'react-router-dom'; //imported to make navbar work

// MATEARIAL UI COMPONENTS

import Appbar from '@material-ui/core/AppBar';  //importing the navabar frame
import Toolbar from '@material-ui/core/Toolbar'; //importing the toolbar frame
import Button from '@material-ui/core/Button';

export class Navbar extends Component {
    render() {
        return (
            <div>
                <Appbar position = 'fixed'>
                    <Toolbar>
                        <div className = 'nav-container'>
                            <Button color = 'inherit' component = {Link} to = '/login' >Login</Button>
                            <Button color = 'inherit' component = {Link} to = '/' >Home</Button>
                            <Button color = 'inherit' component = {Link} to = '/signup' >Signup</Button>
                        </div>
                    </Toolbar>
                </Appbar>
            </div>
        )
    }
}

export default Navbar
