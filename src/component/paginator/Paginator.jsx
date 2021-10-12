import React from 'react'
import PageForm from './PageForm/PageForm'
import classes from './Paginator.module.css'
import arrowLeft from '../../images/arrowLeft.png'
import arrowRight from '../../images/arrowRight.png'

export default class Paginator extends React.Component {
    render () {
        if (this.props.info.pages < 2) {
            return <div></div>
        }

        let pages = []
        for (let i = 1; i <= this.props.info.pages; i++) {
            pages.push(i)
        }

        const changeCharactersPage = (num) => {
            this.props.onChangePage(num)
            this.props.onCharacters(num, this.props.filter)
        }

        const changeCharactersArrow = (arrow) => {
            if (arrow === 'minus' && this.props.currentPage > 1) {
                this.props.onChangePage(this.props.currentPage - 1, this.props.filter)
                this.props.onCharacters(this.props.currentPage - 1, this.props.filter)
            } else if (arrow === 'plus' && this.props.currentPage < this.props.info.pages) {
                this.props.onChangePage(this.props.currentPage + 1, this.props.filter)
                this.props.onCharacters(this.props.currentPage + 1, this.props.filter)
            }
        }

        return (
            <div className={classes.paginator__form}>
                <div className={classes.allPages}>
                    {this.props.info.pages} pages
                </div>
                <div className={classes.paginator}>
                    <div className={classes.previos} onClick={changeCharactersArrow.bind(null, 'minus')}>
                        <img src={arrowLeft} width='15px' height='20px'/>
                    </div>
                    <div className={classes.pageNumbers}>
                        {pages.map(num => {
                            if (Math.abs(this.props.currentPage - num) === 4) {
                                return '...'
                            } else if (Math.abs(this.props.currentPage - num) > 4) {
                                return
                            } else return (
                                <div className={classes.number} onClick={changeCharactersPage.bind(null, num)}>
                                    {num === this.props.currentPage ?
                                        <div className={classes.currentPage}>{num}</div>
                                        : <div>{num}</div>}
                                </div>)
                        })}
                    </div>
                    <div className={classes.next} onClick={changeCharactersArrow.bind(null, 'plus')}>
                        <img src={arrowRight} width='15px' height='20px'/>
                    </div>
                </div>
                <div className={classes.formik}>
                    <PageForm
                        changeCharactersPage={changeCharactersPage}
                        currentPage={this.props.currentPage}
                        pages={this.props.info.pages} />
                </div>

            </div>
            
        )
    }
}