import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class House extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const housesDisplayed = this.props.houses.map((house, index) => {
            return (
                <div>
                    <p key={house.id}>Property Name: {house.property_name}</p>
                    <p>Address: {house.address}</p>
                    <p>City: {house.city}</p>
                    <p>State: {house.state}</p>
                    <p>Zipcode: {house.zip}</p>
                     <Link to='/' className='links'><button onClick={()=>this.props.deleteHouse(house.id)}>
                   Delete</button>
                    </Link>
                </div>
            )
        })

        return (
            <div>
                <div>House</div>
               <p>{housesDisplayed}</p>
            </div>
        )
    }
}

export default House;

