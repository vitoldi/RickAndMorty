import * as axios from 'axios'

const instance = axios.create({
	baseURL: 'https://rickandmortyapi.com/api/'
})

const urlWithFilterCreator = (url, filter) => {
	if (filter) {
		for (let i in filter) {
			if (filter[i]) {
				url += `&${i}=${filter[i]}`
			}
		}
	}
	return url
}

export const getAllCharactersApi = (page, filter) => {
	let url = `character/?page=${page}`

	return (
		instance.get(urlWithFilterCreator(url, filter))
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

	return (
		instance.get(urlWithFilterCreator(url, filter))
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

	return (
		instance.get(urlWithFilterCreator(url, filter))
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