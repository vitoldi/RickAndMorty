import React from 'react'
import preloaderImg from '../../images/5.gif'
import classes from './Preloader.module.css'

export default class Preloader extends React.Component {
    render () {
        return (
            <div className={classes.preloader}>
                <img src={preloaderImg} />
            </div>
        )
    }
}