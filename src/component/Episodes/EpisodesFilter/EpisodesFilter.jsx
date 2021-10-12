import React from 'react'
import classes from './EpisodesFilter.module.css'
import { Formik, Field, Form } from 'formik'

export default class EpisodesFilter extends React.Component {
	
	render() {
		const showFilter = () => {
			const filter = document.getElementById('form__episodes')
			if (filter.className === classes.form__hidden) {
				filter.className = classes.form__show
			} else {
				filter.className = classes.form__hidden
			}

			const button = document.getElementById('openButton__episodes')
			if (button.className === classes.openButton) {
				button.className = classes.closeButton
			} else {
				button.className = classes.openButton
			}
		}

		return (
		<div className={classes.filter}>
			<h2 className={classes.title}>Episodes filter</h2>
			<Formik
					initialValues={{ 
						name: this.props.filter.name, 
						episode: this.props.filter.episode}}
				onSubmit={values => {
					this.props.onChangeFilter(values)
					this.props.onEpisodes(1, values)
				}}>
				<Form className={classes.form__hidden} id='form__episodes'>
					<div className={classes.filterForm}>
						<div className={classes.inputGroup}>
							<div className={classes.inputGroup__input}>
								<div>
									<label htmlFor="name">Episode name</label>
								</div>
								<div>
									<Field id="name" name="name" placeholder="name..." />
								</div>
							</div>

							<div className={classes.inputGroup__input}>
								<div>
									<label htmlFor="name">Episode code</label>
								</div>
								<div>
									<Field id="episode" name="episode" placeholder="episode..." />
								</div>
							</div>
						</div>
					</div>
					

					<div className={classes.button__submit}>
						<button type="submit">
							Submit
						</button>
					</div>
				</Form>
			</Formik>
			<div className={classes.openButton} id='openButton__episodes' onClick={showFilter}></div>
		</div>
		)}}