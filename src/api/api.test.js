const { 
	urlWithFilterCreator,
	getAllCharactersApi,
	getCharacterInfoApi,
	getAllLocationsApi,
	getLocationInfoApi,
	getAllEpisodesApi,
	getEpisodeInfoApi }
	= require('./api')

const url = 'https://rickandmortyapi.com/api/character/?page=1'
const filterCharacter = {
	name: 'morty',
	status: 'alive',
	species: '',
	gender: 'male',
	type: ''
}

const filterLocation = {
	name: 'Citadel of Ricks',
	dimension: '',
	type: ''
}

const filterEpisode = {
	name: '',
	episode: 'S03E07'
}

test('formation of the correct url', () => {
	expect(urlWithFilterCreator(url, filterCharacter))
	.toBe('https://rickandmortyapi.com/api/character/?page=1&name=morty&status=alive&gender=male');
})

test('getting all characters response with filters', async () => {
	const data = await getAllCharactersApi(1, filterCharacter)
	const name = data.results[0].name
	const status = data.results[0].status
	const gender = data.results[0].gender

	expect(name).toBe('Morty Smith')
	expect(status).toBe('Alive')
	expect(gender).toBe('Male')
})

test('getting corret character', async () => {
	const data = await getCharacterInfoApi(2)
	const name = data.name

	expect(name).toBe('Morty Smith')
})

test('getting all loactions response with filters', async () => {
	const data = await getAllLocationsApi(1, filterLocation)
	const name = data.results[0].name

	expect(name).toBe('Citadel of Ricks')
})

test('getting corret location', async () => {
	const data = await getLocationInfoApi(3)
	const name = data.name

	expect(name).toBe('Citadel of Ricks')
})

test('getting all episodes response with filters', async () => {
	const data = await getAllEpisodesApi(1, filterEpisode)
	const name = data.results[0].name

	expect(name).toBe('The Ricklantis Mixup')
})

test('getting corret episode', async () => {
	const data = await getEpisodeInfoApi(28)
	const name = data.name

	expect(name).toBe('The Ricklantis Mixup')
})

