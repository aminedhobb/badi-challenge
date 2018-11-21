import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchCars } from '../actions';
import { Link } from 'react-router-dom'; 

import { fetchZombies } from '../actions';

class ZombiesIndex extends Component {

  componentWillMount() {
    this.props.fetchZombies();
  }

  renderZombies() {
    return(
      this.props.zombies.map((zombie) => {
        return(
          <div className="card" key={zombie.attributes.name} >
            <h4> {zombie.attributes.name} </h4>
            <p> <strong> Hit points :</strong> {zombie.attributes.hitpoints}</p>
            <p> <strong> Speed :</strong> {zombie.attributes.speed} </p>
            <p> <strong> Brains Eaten :</strong> {zombie.attributes.brains_eaten} </p>
            <p> <strong> Turn Date :</strong> {zombie.attributes.turn_date} </p>            
          </div>
        )
      })
    )
  }

  render() {
    return(
      <div className="app">
        <div className="description-container">
          <div className="description-image">
          </div>
          <h3 className="text-center"> Zombie Challenge !</h3>
          <div className="text-center">
            <Link className="btn btn-primary btn-cta" to="/cars/new">
                Add a zombie
            </Link> 
          </div>
        </div>
        <div className="cards-container">
          {this.renderZombies()}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    zombies: state.zombies.data
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchZombies }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ZombiesIndex);
