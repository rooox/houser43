import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';

class Wizard extends Component {
    constructor() {
        super();

        this.state = {
            property_name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }
    }

    handleNameInput(val) {
        this.setState({ property_name: val })
    }

    handleAddressInput(val) {
        this.setState({ address: val })
    }

    handleCityInput(val) {
        this.setState({ city: val })
    }

    handleStateInput(val) {
        this.setState({ state: val })
    }

    handleZipInput(val) {
        this.setState({ zip: val })
    }

    addHouse=()=>{
        let newHouse = {
            property_name : this.state.property_name,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip
        }

        axios.post('/api/houses', newHouse).then( houses => console.log(houses) || (this.setState({houses: houses.data})))
}
    render() {
        return (
            <div>
                <Link to='/' className='links'>
                    <button>Cancel</button>
                </Link>
                <div>Wizard</div>
                <h4>Property Name</h4>
                <input onChange={(e)=>this.handleNameInput(e.target.value)} type='text'/>
                <h4>Address</h4>
                <input onChange={(e)=>this.handleAddressInput(e.target.value)} type='text'/>
                <h4>City</h4>
                <input onChange={(e)=>this.handleCityInput(e.target.value)} type='text'/>
                <h4>State</h4>
                <input onChange={(e)=>this.handleStateInput(e.target.value)} type='text'/>
                <h4>Zip</h4>
                <input onChange={(e)=>this.handleZipInput(e.target.value)}/>
                <br />
                <br />
                <Link to='/' className='links'>
                <button onClick={()=>this.addHouse()}>Complete</button>
                </Link>

                
            </div>

        )
    }
}

export default Wizard;