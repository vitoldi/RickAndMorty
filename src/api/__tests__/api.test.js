const { urlWithFilterCreator } = require('../api')

const url = 'https://rickandmortyapi.com/api/character/?page=1'
const filterCharacter = {
	name: 'morty',
	status: 'alive',
	species: '',
	gender: 'male',
	type: ''
}

test('formation of the correct url', () => {
	expect(urlWithFilterCreator(url, filterCharacter))
	.toBe('https://rickandmortyapi.com/api/character/?page=1&name=morty&status=alive&gender=male');
})