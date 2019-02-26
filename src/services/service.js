import axios from 'axios'

export default class Service {

    _apiBase = 'http://localhost:8080';

    async getResourse() {

        const res = axios.get(`${this._apiBase}`)

        console.log(res, 'res1')

        return await res;


    }

    async putResourse(data) {

        return await axios.put(`${this._apiBase}/update/${data.id}`, data)


    }

    async getFiltered(str) {



        let res ;
        //
        //
        // const res = await axios.get(`${this._apiBase}?name=${str}`);
        // //
        // const res1 = await axios.get(`${this._apiBase}?city=${str}`);
        //
        // const res2 = await axios.get(`${this._apiBase}?funds=${str}`);
        //
        // const res3 = await axios.get(`${this._apiBase}?phone=${str}`);

        // const  { data = {}} = res
        // const { data = []} = data
        
        if (str == '100' || str < 100){

            if (str==='100'){

                 res = await axios.get(`${this._apiBase}?funds=100`)

            }
            else {

                 res = await axios.get(`${this._apiBase}?funds=-100`)
            }

            return await res
        }

        else {

             res = await axios.all([axios.get(`${this._apiBase}?name=${str}`),

                axios.get(`${this._apiBase}?city=${str}`),

                axios.get(`${this._apiBase}?email=${str}`),

                axios.get(`${this._apiBase}?phone=${str}`)

            ])

            console.log(res, 'res')

        }

        let mas = [];

        res.map((i) => {

            const {data = []} = i.data


            data.map((i)=>{

                mas.push(i)

            })

        });
        console.log(mas, 'mas')


        return await mas

    }


}