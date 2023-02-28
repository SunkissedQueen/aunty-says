import React from "react"
import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"

const Header = ({
  logged_in,
  new_user_route,
  sign_in_route,
  sign_out_route
}) => {
  return (
    <Nav>
      <NavItem>
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
      </NavItem>
      {!logged_in?
        (<>
          <NavItem>
            <a href={sign_in_route} className="nav-link">
              Sign In
            </a>
          </NavItem>
          <NavItem>
            <a href={new_user_route} className="nav-link">
              Sign Up
            </a>
          </NavItem>
        </>)
        :
        (<>
          <NavItem>
            <a href={sign_out_route} className="nav-link">
              Sign Out
            </a>
          </NavItem>
          <NavItem>
            <NavLink to="/index" className="nav-link">
              See Aunty Comments
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/new" className="nav-link">
              Ask a Question
            </NavLink>
          </NavItem>
        </>)
      } 
    </Nav>
  )
}

export default Header