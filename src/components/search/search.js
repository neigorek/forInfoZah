import React, {Component} from 'react'
import './search.css'


export default class Search extends Component{

    state = {
        term: ''
    }

    onSearchChange = (e) => {

        const term = e.target.value;

        console.log(term, 'term')

        this.setState({term});

        this.props.onSearchChange(term)
    }


    render() {


        return(
            <input className={'input-group col-6 text-center innpu'}
                   type='text'
                   placeholder={'searching...'}
                   value={this.state.term}
                   onChange={this.onSearchChange}
                    />
        )
    }
}