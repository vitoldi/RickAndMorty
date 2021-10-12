import * as axios from 'axios'

const instance = axios.create({
	baseURL: 'https://rickandmortyapi.com/api/'
})

export const getAllCharactersApi = (page, filter) => {
	let url = `character/?page=${page}`
	if (filter) {
		for (let i in filter) {
			if (filter[i]) {
				url += `&${i}=${filter[i]}`
			}
		}
	}

	return (
		instance.get(url)
			.then(response => {
				return response.data
			})
	)
}

export const getCharacterInfoApi = (id) => {
	return (
		instance.get(`character/${id}`)
			.then(response => {
				return response.data
			})
	)
}

export const getAllLocationsApi = (page, filter) => {
	let url = `location/?page=${page}`
	if (filter) {
		for (let i in filter) {
			if (filter[i]) {
				url += `&${i}=${filter[i]}`
			}
		}
	}

	return (
		instance.get(url)
			.then(response => {
				return response.data
			})
	)
}

export const getLocationInfoApi = (id) => {
	return (
		instance.get(`location/${id}`)
			.then(response => {
				return response.data
			})
	)
}

export const getAllEpisodesApi = (page, filter) => {
	let url = `episode/?page=${page}`

	if (filter) {
		for (let i in filter) {
			if (filter[i]) {
				url += `&${i}=${filter[i]}`
			}
		}
	}

	return (
		instance.get(url)
			.then(response => {
				return response.data
			})
	)
}

export const getEpisodeInfoApi = (id) => {
	return (
		instance.get(`episode/${id}`)
			.then(response => {
				return response.data
			})
	)
}