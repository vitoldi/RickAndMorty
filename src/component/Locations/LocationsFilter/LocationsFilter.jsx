import React from 'react'
import classes from './LocationsFilter.module.css'
import { Formik, Field, Form } from 'formik'

const LocationsFilter = (props) => {

		const showFilter = () => {
			const filter = document.getElementById('form__locations')
			if (filter.className === classes.form__hidden) {
				filter.className = classes.form__show
			} else {
				filter.className = classes.form__hidden
			}

			const button = document.getElementById('openButton__locations')
			if (button.className === classes.openButton) {
				button.className = classes.closeButton
			} else {
				button.className = classes.openButton
			}
		}

		return (
		<div className={classes.filter}>
			<h2 className={classes.title}>Filters</h2>
			<Formik
					initialValues={{ 
						name: props.filter.name, 
						dimension: props.filter.dimension,
						type: props.filter.type}}
				onSubmit={values => {
					props.onChangeFilter(values)
					props.onLocations(1, values)
				}}>
				<Form className={classes.form__hidden} id='form__locations'>
					<div className={classes.filterForm}>
						<div className={classes.inputGroup}>
							<div className={classes.inputGroup__input}>
								<div>
									<label htmlFor="name">Location name:</label>
								</div>
								<div>
									<Field id="name" name="name" placeholder="name..." />
								</div>
							</div>

							<div className={classes.inputGroup__input}>
								<div>
									<label htmlFor="name">Dimension:</label>
								</div>
								<div>
									<Field id="dimension" name="dimension" placeholder="dimension..." />
								</div>
							</div>

							<div className={classes.inputGroup__input}>
								<div>
									<label htmlFor="name">Type:</label>
								</div>
								<div>
									<Field id="type" name="type" placeholder="type..." />
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
			<div className={classes.openButton} id='openButton__locations' onClick={showFilter}></div>
		</div>
		)}

export default LocationsFilter