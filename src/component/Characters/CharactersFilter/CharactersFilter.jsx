import React from 'react'
import classes from './CharactersFilter.module.css'
import { Formik, Field, Form } from 'formik'

const CharactersFilter = (props) => {
		const showFilter = () => {
			const filter = document.getElementById('form')
			if (filter.className === classes.form__hidden) {
				filter.className = classes.form__show
			} else {
				filter.className = classes.form__hidden
			}

			const button = document.getElementById('openButton')
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
					status: props.filter.status, 
					species: props.filter.species,
					gender: props.filter.gender,
					type: props.filter.type}}
				onSubmit={values => {
					props.onChangeFilter(values)
					props.onCharacters(1, values)
				}}>
				<Form className={classes.form__hidden} id='form'>
					<div className={classes.filterForm}>
						<div className={classes.inputGroup}>
							<div className={classes.inputGroup__input}>
								<div>
									<label htmlFor="name">Character name:</label>
								</div>
								<div>
									<Field id="name" name="name" placeholder="name..." />
								</div>
							</div>

							<div className={classes.inputGroup__input}>
								<div>
									<label htmlFor="name">Species:</label>
								</div>
								<div>
									<Field id="species" name="species" placeholder="species..." />
								</div>
							</div>

						</div>

							

						<div className={classes.radioGroup}>
							<div className={classes.radioGroup__radioWrapper}>
								<div id="gender-radio-group" className={classes.radioGroup__title}>Gender:</div>
								<div role="group" aria-labelledby="gender-radio-group" className={classes.radioGroup__radioInput}>
									<label>
										<Field type="radio" name="gender" value="" />
										All
									</label>
									<label>
										<Field type="radio" name="gender" value="female" />
										Female
									</label>
									<label>
										<Field type="radio" name="gender" value="male" />
										Male
									</label>
									<label>
										<Field type="radio" name="gender" value="genderless" />
										Genderless
									</label>
									<label>
										<Field type="radio" name="gender" value="unknown" />
										Unknown
									</label>
								</div>
							</div>
							
							<div className={classes.radioGroup__radioWrapper}>
								<div id="status-radio-group" className={classes.radioGroup__title}>Status:</div>
								<div role="group" aria-labelledby="status-radio-group" className={classes.radioGroup__radioInput}>
									<label>
										<Field type="radio" name="status" value='' />
										All
									</label>
									<label>
										<Field type="radio" name="status" value="alive" />
										Alive
									</label>
									<label>
										<Field type="radio" name="status" value="dead" />
										Dead
									</label>
									<label>
										<Field type="radio" name="status" value="unknown" />
										Unknown
									</label>
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
			<div className={classes.openButton} id='openButton' onClick={showFilter}>
			</div>
		</div>
		)}

export default CharactersFilter