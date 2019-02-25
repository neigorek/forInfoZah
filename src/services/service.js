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

    async getFiltered(str){


            const res = await axios.get(`${this._apiBase}?name=${str}`);
            //
            const res1 = await axios.get(`${this._apiBase}?city=${str}`);

            const res2 = await axios.get(`${this._apiBase}?funds=${str}`);

            const res3 = await axios.get(`${this._apiBase}?phone=${str}`);


        console.log(res, 'res')

            return [...res.data.data, ...res1.data.data, ...res2.data.data, ...res3.data.data]


    }


}




