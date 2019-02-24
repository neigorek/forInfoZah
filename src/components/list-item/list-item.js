import React, {Component} from 'react'
import './list-item.css'


export default class ListItem extends Component{



    constructor(props){
        super(props);
        const {name, email, funds, city, phone} = props;
        this.state = {name, email, funds, city, phone, isEdit:false}

    }



    edit = () => {

        this.setState({isEdit: true})

        console.log('edit')

    }

     save =  async () => {

        const {name, email, funds, city, phone} = this.state;

        await this.props.put({name, email, funds, city, phone, id: this.props.id});

        this.setState({isEdit:false})

    }

    cancel = () => {

        this.setState({
            name: this.props.name,
            email: this.props.email,
            funds: this.props.funds,
            city: this.props.city,
            phone: this.props.phone,
            isEdit: false
        })
    }

    changing = (field, e) => {

        this.setState({[field]:e.target.value })

        console.log(field, e.target.value)


    }


    render() {

        const {name, email, funds, city, phone} = this.state;

        return(

            <div>
                {!this.state.isEdit ?
                    (<div className={'d-flex'}>
                        <div className={'col-2'}>{name}</div>
                        <div className={'col-3'}>{email}</div>
                        <div className={'col-1'}>{funds}</div>
                        <div className={'col-2'}>{city}</div>
                        <div className={'col-3'}>{phone}</div>
                        <button
                            className={'btn col-1'}
                            onClick={this.edit}
                        ><img src={'/img/icons8-pen.png'} alt={'img'}/></button>
                    </div>)
                    :
                    (<div className={'d-flex'}>
                        <input className={'col-2'} type={'text'} value={name} onChange={this.changing.bind(this, 'name')}/>
                        <input className={'col-4'} type={'text'} value={email} onChange={this.changing.bind(this, 'email')}/>
                        <input className={'col-1'} type={'text'} value={funds} onChange={this.changing.bind(this, 'funds')}/>
                        <input className={'col-1'} type={'text'} value={city} onChange={this.changing.bind(this, 'city')}/>
                        <input className={'col-2'} type={'text'} value={phone} onChange={this.changing.bind(this, 'phone')}/>
                        <div className={'col-2'}>
                        <button className={'btn'}
                                onClick={this.save}>save</button>
                        <button className={'btn'}
                            onClick={this.cancel}>X</button>
                        </div>
                    </div>)

                }
            </div>
        )
    }
}