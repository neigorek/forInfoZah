import React, {Component} from 'react'
import './list.css'
import ListItem from '../list-item'

export default class List extends Component{



    render() {

        const {persons, put} = this.props;

        const elems = persons.map((item)=>{

            const {id, ...items } = item.props.children

            return(

                <li key={id} className={'list-group-item'}>
                    <ListItem
                            {...items}
                            put={put}
                            id={id}
                            />
                </li>
            )
        })

        return(
            <ul className={'list-group-active'}>
                {elems}
            </ul>
        )
    }
}