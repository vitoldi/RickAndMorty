import React from 'react'
import notFoundImg from '../../images/404.png'
import classes from './NotFound.module.css'

const NotFound = () => {
    return (
        <div className={classes.notFound}>
            <img src={notFoundImg} alt="Oops" />
        </div>
    )
}

export default NotFound