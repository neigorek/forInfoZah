import axios from 'axios'

export default class Service {

    _apiBase = 'http://localhost:8080';

    async getResourse(){

        const res = axios.get(`${this._apiBase}`)

        return await res;


    }

    async putResourse(data){

        return await axios.put(`${this._apiBase}/update/${data.id}`, data)


    }


}




