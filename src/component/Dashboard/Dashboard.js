import React, { Component } from 'react';
import House from '../House/House';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            houses: []
        }
        this.deleteHouse = this.deleteHouse.bind(this);
    }
    componentDidMount() {
        axios.get('/api/houses')
            .then((res) => {
                this.setState({ houses: res.data });

            })
    }

    deleteHouse(id) {
        console.log('id is ', id);
        axios.delete(`/api/houses/${id}`).then(((result) => {
            console.log(result)
        }))
    }

    render() {
        console.log(this.state);

        return (
            <div>
                <div>Dashboard</div>
                <Link to='/wizard' className='links'>
                    <button>Add New</button>
                </Link>
                <House
                    houses={this.state.houses}
                    deleteHouse={this.deleteHouse}
                />
                {/* {housesDisplayed} */}

            </div>
        )
    }
}

export default Dashboard;