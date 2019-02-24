import React, {Component} from 'react'
import './app.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import Service from "../../services/service";
import Search from '../search'
import List from '../list'


export default class App extends Component {

    service = new Service();

    state = {

        persons: [],

        term: '',

        currentPage: 1,

        dPerPage: 10,

    }

    constructor(props){

        super(props);

        this.updateMe();

        this.handleClick = this.handleClick.bind(this)

    }

    handleClick = (event) => {

        this.setState({
            currentPage: Number(event.target.id)
        });

    }

    updateMe(){

            this.service.getResourse().then(({data})=>{
                this.setState(()=>({persons: data.data}))
            })
    }

     updateUser = async(data) => {

         await this.service.putResourse(data);


     }


    onSearchChange = (term) =>{

        this.setState({term});


    }


    search(items, term) {

        if (term.length === 0) {

            return items;

        }

        return items.filter((item)=>{


                return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1 ||

                    item.email.toLowerCase().indexOf(term.toLowerCase()) > -1 ||

                    item.funds.toLowerCase().indexOf(term.toLowerCase()) > -1 ||

                    item.city.toLowerCase().indexOf(term.toLowerCase()) > -1 ||

                    item.phone.toLowerCase().indexOf(term.toLowerCase()) > -1
            });


    }

    render(){


        const {persons, term, dPerPage, currentPage} = this.state;

        const VisibleItems = this.search(persons, term);

        console.log(VisibleItems)

        const indexOfLastTodo = currentPage * dPerPage;

        const indexOfFirstTodo = indexOfLastTodo - dPerPage;

        const currentTodos = VisibleItems.slice(indexOfFirstTodo, indexOfLastTodo);

        const renderTodos = currentTodos.map((todo, index) => {

            return( <li key={index}>{todo}</li>)

        });


        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(VisibleItems.length / dPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li className={'btn btn-outline-info paggu'}
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                >
                    {number}
                </li>
            );
        });


        return(

            <div className={'border container'}>

                <Search
                        onSearchChange={this.onSearchChange}/>

                <div>
                    <ul className={'list-group'}>

                            <List
                                persons={renderTodos}
                                put={this.updateUser}/>

                    </ul>

                </div>
                <div>
                    <ul className={'pagination pagination-lg'}>
                        {renderPageNumbers}
                    </ul>
                </div>
            </div>

        )

    }

}

