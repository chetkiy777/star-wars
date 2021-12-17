import axios from "axios";

const instance = axios.create({
    baseURL: 'https://swapi.py4e.com/api/people/',
    headers: {
        "Content-Type": "application/json"
    }
})

export default class ApiService {
    constructor() {
        this.searchQuery = '',
        this.page = 0
    }

    get query() {
        return this.searchQuery
    }

    set query(newQuery) {
        this.searchQuery = newQuery
    }

   async getHumans() {
       return await instance.get(`?page=${this.page}`).then(response => {
          return response.data.results
        })
    }

   async getInfoHuman() {
       return await instance.get(`?search=${this.searchQuery}`).then(response => {
           return response.data.results
        })
    }

    incrementPage() {
        if (this.page === null) {
            return this.page -= 1
        }

        this.page += 1
    }

    decrementPage() {
        if (this.page === null) {
            return this.page += 1
        }

        this.page -= 1
    }

}