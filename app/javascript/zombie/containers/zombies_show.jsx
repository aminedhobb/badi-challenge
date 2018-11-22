import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { fetchZombies } from '../actions';

import Aside from '../components/aside';

class ZombiesShow extends Component {

  componentWillMount() {
    if (!this.props.zombie) {
      console.log('i am here')
      this.props.fetchZombies();
    }
  }

  renderWeapons(weapons) {
    return (
      weapons.map((weapon) => {
        return(
          <ul>
            <li> Name : {weapon.name} </li>
            <li> Attack points : {weapon.attack_points} </li>
            <li> Durability : {weapon.durability} </li>
            <li> Price : {weapon.price} </li>
          </ul>
        )
      })
    );
  }
  
  renderArmors(armors) {
    return (
      armors.map((armor) => {
        return(
          <ul>
            <li> Name : {armor.name} </li>
            <li> Defense points : {armor.defense_points} </li>
            <li> Durability : {armor.durability} </li>
            <li> Price : {armor.price} </li>
          </ul>
        )
      })
    );
  }

  render () {
    const zombie = this.props.zombie;
    console.log(zombie);
    let weapons = null;
    let armors = null;

    console.log(zombie.attributes.weapons.length)
    if (!zombie.attributes.weapons.length === 0 ) {
      weapons = this.renderWeapons(zombie.attributes.weapons);
    }

    if (!zombie.attributes.armors.length === 0 ) {
      armors = this.renderarmors(zombie.attributes.armors);
    }

    console.log(weapons)
    if (!zombie) {
      return (
        <Aside key="aside">
          <Link to="/">Back to list</Link>
        </Aside>);
    }
    return [
      <Aside key="aside">
        <Link to="/">Back to list</Link>
      </Aside>,
      <div className="zombie-container" key="zombie">
        <div className="zombie-card">
          <img className="zombie-picture" src="/assets/images/logo_square.svg" />
          <div className="zombie-details">
            <span>{zombie.attributes.name}</span>
              <h5> Weapons : </h5>
                {weapons}
              <h5> Amors </h5>
                {armors}
          </div>
        </div>
      </div>
    ];
  }
};

function mapStateToProps(state, ownProps) {
  const id = ownProps.match.params.id;
  return {
    zombie: state.zombies.data.find((zombie) => zombie.id === id)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchZombies }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ZombiesShow));
