
export default class GotService {
   constructor() {
      this._apiBase = 'https://www.anapioficeandfire.com/api/'
   }

   async getResours(url) {
      let res = await fetch(`${this._apiBase}${url}`)
   
      if(!res.ok) {
         throw new Error(`Could not fetch ${url}, status: ${res.status}`)
      }
   
      return await res.json()
   }

   async getAllCharacters() {
      const res = await this.getResours('characters?page=6&pageSize=10')
      return res.map(this._transformCharacter)
   }
   async getCharacter(id) {
      const character = await this.getResours(`characters/${id}`)
      return this._transformCharacter(character)
   }

   async getAllHouses() {
      const res = await this.getResours('houses?page=6&pageSize=10')
      return res.map()
   }
   async getHouse(id) {
      return this.getResours(`houses/${id}`)
   }

   async getAllBooks() {
      return this.getResours('books')
   }
   async getBook(id) {
      return this.getResours(`books/${id}`)
   }

   _transformCharacter(char) {
      return {
         name: char.name,
         gender: char.gender,
         born: char.born,
         died: char.died,
         culture: char.culture
      }
   }

   _transformHouse(house) {
      return {
         name: house.name,
         region: house.region,
         words: house.words,
         titles: house.titles,
         overlord: house.overlord,
         ancestralWeapons: house.ancestralWeapons
      }
   }

   _transformBook(book) {
      return {
         name: book.name,
         numberOfPage: book.numberOfPage,
         publiser: book.publiser,
         released: book.released
      }
   }
}

