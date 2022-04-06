import React from 'react'
import {AffairType} from "./HW2";
import classes from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => props.deleteAffairCallback(props.affair._id)// need to fix
    return (
        <div className={classes.affairs}>
            <span className={classes.name}>{props.affair.name}</span>
            <span className={props.affair.priority === 'high'? classes.high : props.affair.priority === 'middle' ? classes.middle : classes.priority}>[{props.affair.priority}]</span>

            <button className={classes.buttonDelete} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
