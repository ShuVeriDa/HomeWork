import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import classes from '../../p1-main/m1-ui/u1-app/App.module.css'

function Header() {
   return (
      <div className={classes.navLinks}>
         <NavLink to={PATH.PRE_JUNIOR}>Pre_Junior</NavLink>
         <NavLink to={PATH.JUNIOR}>Junior</NavLink>
         <NavLink to={PATH.JUNIOR_PLUS}>Junior+</NavLink>
      </div>
   )
}

export default Header
