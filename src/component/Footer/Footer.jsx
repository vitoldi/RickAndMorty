import React from 'react'
import classes from './Footer.module.css'
import github from '../../images/github.png'
import linkedin from '../../images/linkedin.png'

const Footer = () => {
	return (
		<footer className={classes.footer}>
			<div className={classes.footer__container}>
				<div className={classes.footer__content}>
					<div className={classes.title}>
						Contacts:
					</div>
					<div className={classes.contacts}>
						<div className={classes.contactLink}>
							<a href="https://github.com/vitoldi" target="_blank" rel="noreferrer">
								<img src={github} height='30px' width='30px' alt="Oops" /><span>GitHub</span></a>
						</div>
						<div className={classes.contactLink}>
							<a href="https://www.linkedin.com/in/vitali-logvin-575001212" target="_blank" rel="noreferrer">
								<img src={linkedin} height='30px' width='30px' alt="Oops" /><span>Linkedin</span></a>
						</div>
					</div>
				</div>
				<div className={classes.year}>
					V.Logvin, 2021
				</div>
			</div>
		</footer>
	)
}

export default Footer