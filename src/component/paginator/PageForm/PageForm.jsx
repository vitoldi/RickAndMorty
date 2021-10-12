import React from 'react'
import { useFormik } from 'formik'
import classes from './PageForm.module.css'

const PageForm = (props) => {
	const formik = useFormik({
		initialValues: {
			page: '',
		},
		onSubmit: values => {
			const page = Number(values.page)
			if (values.page
				&& page > 0
				&& page <= props.pages
				&& Number.isInteger(page)
				&& page !== props.currentPage
			) {
				props.changeCharactersPage(page)
			}
		},
	});
	return (
		<form onSubmit={formik.handleSubmit}>
			<label className={classes.paginator__label}>Page:</label>
			<input className={classes.paginator__input}
				id="page"
				name="page"
				type="page"
				onChange={formik.handleChange}
				value={formik.values.page}
			/>

			<button className={classes.paginator__button} type="submit">Go</button>
		</form>
	);
};

export default PageForm