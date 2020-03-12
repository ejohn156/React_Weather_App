import React, { Component } from 'react';
import { NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavigationLink.css'
import '../NavMenu/NavMenu.css'

export class NavigationLink extends Component {

    componentDidMount(){
        console.log(this.props.linkName)
    }
    render() {
        return (
            <ul className="navbar-nav flex-grow">
            <NavItem>
                <NavLink tag={Link} className="text-dark" to="/">{this.props.linkName}</NavLink>
            </NavItem>
            </ul>
        )
    }
}