import React from 'react'
import preloaderImg from '../../images/5.gif'
import classes from './Preloader.module.css'

const Preloader = () => {
    return (
        <div className={classes.preloader}>
            <img src={preloaderImg} alt="Oops" />
        </div>
    )
}

export default Preloader