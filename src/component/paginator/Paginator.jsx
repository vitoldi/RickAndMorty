import React from 'react'
import PageForm from './PageForm/PageForm'
import classes from './Paginator.module.css'
import arrowLeft from '../../images/arrowLeft.png'
import arrowRight from '../../images/arrowRight.png'

const Paginator = (props) => {
    if (props.info.pages < 2) {
        return <div></div>
    }

    let pages = []
    for (let i = 1; i <= props.info.pages; i++) {
        pages.push(i)
    }

    const changeCharactersPage = (num) => {
        props.onChangePage(num)
        props.onCharacters(num, props.filter)
    }

    const changeCharactersArrow = (arrow) => {
        if (arrow === 'minus' && props.currentPage > 1) {
            props.onChangePage(props.currentPage - 1, props.filter)
            props.onCharacters(props.currentPage - 1, props.filter)
        } else if (arrow === 'plus' && props.currentPage < props.info.pages) {
            props.onChangePage(props.currentPage + 1, props.filter)
            props.onCharacters(props.currentPage + 1, props.filter)
        }
    }

    return (
        <div className={classes.paginator__form}>
            <div className={classes.allPages}>
                {props.info.pages} pages
            </div>
            <div className={classes.paginator}>
                <div className={classes.previos} onClick={changeCharactersArrow.bind(null, 'minus')}>
                    <img src={arrowLeft} width='15px' height='20px' alt="Oops"/>
                </div>
                <div className={classes.pageNumbers}>
                    {pages.map(num => {
                        if (Math.abs(props.currentPage - num) === 4) {
                            return '...'
                        } else if (Math.abs(props.currentPage - num) < 4) {
                            return (
                                <div className={classes.number} onClick={changeCharactersPage.bind(null, num)}
                                key={num}>
                                {num === props.currentPage ?
                                    <div className={classes.currentPage}>{num}</div>
                                    : <div>{num}</div>}
                            </div>)
                        } else return null                           
                    })}
                </div>
                <div className={classes.next} onClick={changeCharactersArrow.bind(null, 'plus')}>
                    <img src={arrowRight} width='15px' height='20px' alt="Oops" />
                </div>
            </div>
            <div className={classes.formik}>
                <PageForm
                    changeCharactersPage={changeCharactersPage}
                    currentPage={props.currentPage}
                    pages={props.info.pages} />
            </div>

        </div>
        
    )
}

export default Paginator